const socialLinks = {
  linkedin: "https://www.linkedin.com/in/janmejay-joshi/",
  github: "https://github.com/Janmejay-Joshi/",
  devfolio: "https://devfolio.co/@janmejay_joshi",
  instagram: "https://www.instagram.com/janmejayjoshi/",
  mail: "mailto:publish.janmejay@gmail.com",
};

export const reboot = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.location.reload();
  }, 1000);

  return "Rebooting...";
};

export const social = async (args?: string[]): Promise<string> => {
  if (args && args[0] in socialLinks) {
    setTimeout(function () {
      window.open((socialLinks as any)[args[0]], "_blank");
    }, 1000);

    return `Opening ${args[0]}...`;
  }

  return `
  Usage: social [OPTIONS]

  OPTIONS
    linkedin     <a style="text-decoration:underline;text-underline-offset: 2px;" href="https://www.linkedin.com/in/janmejay-joshi/">Open Linkedin Profile</a>
    github       <a style="text-decoration:underline;text-underline-offset: 2px;" href="https://github.com/Janmejay-Joshi/">Open github Profile</a>
    devfolio     <a style="text-decoration:underline;text-underline-offset: 2px;" href="https://devfolio.co/@janmejay_joshi">Open Devfolio Profile</a>
    instagram    <a style="text-decoration:underline;text-underline-offset: 2px;" href="https://www.instagram.com/janmejayjoshi/">Open Instagram Profile</a>
    mail         <a style="text-decoration:underline;text-underline-offset: 2px;" href="mailto:publish.janmejay@gmail.com">Mail to Janmejay</a>
  `;
};

export const gui = (args?: string[]): string => {
  // TODO:
  setTimeout(function () {
    window.open("https://janmejay.vercel.app/", "_blank");
  }, 1500);

  return "Opening GUI Version...";
};

export const blog = (args?: string[]): string => {
  // TODO:
  setTimeout(function () {
    window.open("https://janmejay.vercel.app/posts", "_blank");
  }, 1500);

  return "Opening Blog...";
};
