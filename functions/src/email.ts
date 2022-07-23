import sgMail from "@sendgrid/mail";

const sgKey = process.env.SENDGRID_API_KEY;
if (sgKey) {
  sgMail.setApiKey(sgKey);
} else {
  throw new Error("No SG API key");
}

const sendEmail = (
  email: string,
  subject: string,
  html: string,
  text: string,
) => {
  const [, domain] = email.split("@");
  if (domain !== "spgs.org") {
    throw new Error(
      `Expected domain of email to be spgs.org; received ${domain}`,
    );
  }
  return sgMail.send({
    to: email,
    from: "emma.goodliffe@spgs.org",
    subject,
    html,
    text,
  });
};

const getRandomSignature = () => {
  const signatures = [
    "piratically",
    // "buccaneerishly",
    "criminally",
    "illegally",
    "lawlessly",
    "tyrannically",
    "insincerely",
    "unfaithfully",
    "untruthfully",
  ];
  return signatures[Math.floor(Math.random() * signatures.length)];
};

export const sendMemeConfirmationEmail = async (
  email: string,
  name: string,
  id: string,
  code: number,
) => {
  const url = `https://europe-west2-pmpirate.cloudfunctions.net/confirmMeme/${id}/${code}`;
  const getContent = (isHtml: boolean) =>
    isHtml
      ? `Confirm your <strong>${name}</strong> meme in the schedule <a href="${url}">here</a>.`
      : `Confirm your ${name} meme in the schedule: ${url} .`;
  const getLines = (isHtml: boolean) => [
    "Hi,",
    "",
    getContent(isHtml),
    "",
    `Yours ${getRandomSignature()},`,
    "PMP 🏴‍☠️",
    "",
  ];
  const html = getLines(true)
    .map(x => `<p>${x}</p>`)
    .join("");
  const text = getLines(false).join("\n");
  return sendEmail(email, "PMP meme", html, text);
};
