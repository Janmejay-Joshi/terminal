export const banner = (args?: string[]): string => {
  return `
 ▐▄▄▄ ▄▄▄·  ▐ ▄ • ▌ ▄ ·. ▄▄▄ . ▐▄▄▄ ▄▄▄·  ▄· ▄▌ 
  ·██▐█ ▀█ •█▌▐█·██ ▐███▪▀▄.▀·  ·██▐█ ▀█ ▐█▪██▌ 
▪▄ ██▄█▀▀█ ▐█▐▐▌▐█ ▌▐▌▐█·▐▀▀▪▄▪▄ ██▄█▀▀█ ▐█▌▐█▪ 
▐▌▐█▌▐█ ▪▐▌██▐█▌██ ██▌▐█▌▐█▄▄▌▐▌▐█▌▐█ ▪▐▌ ▐█▀·. 
 ▀▀▀• ▀  ▀ ▀▀ █▪▀▀  █▪▀▀▀ ▀▀▀  ▀▀▀• ▀  ▀   ▀ •  

Type 'help' to see list of available commands.
 `;
};

export const echo = (args?: string[]): string => {
  if (args) return args?.join(" ");
  else return "";
};

export const todo = (args?: string[]): string => {
  // TODO:
  return `
  Stuff to Add : 
    1. Add Content (about me, projects, blogs...)
    2. Navigation and File Directories (ls, cd, etc.)
    3. Fix and Enhance Commands 
  `;
};

export const about = (args?: string[]): string => {
  // TODO:
  return `
  -- TODO --
  `;
};

export const projects = (args?: string[]): string => {
  // TODO:
  return `
  -- TODO --
  `;
};

export const blogs = (args?: string[]): string => {
  // TODO:
  return `
  -- TODO --
  `;
};

export const date = (args?: string[]): string => {
  const now = new Date();
  return now.toUTCString();
};

export const help = (args?: string[]): string => {
  // TODO: ""
  return `
  This is an Interactive ZSH like Terminal Portfolio.
  Try out these commands to dive into the world of a terminal dweller.

  <u>Display Commands</u> :

    about     :  Get to Know a bit about me
    social    :  Provide Social Media Information.
    blogs     :  Stuff I wrote 
    projects  :  Stuff I Made 

    echo   :  Display text passed as an argument
    date   :  Display the system date and time
    whoami :  Display username of current user

  <u>System Commands</u> :

    sudo   :  Run Commands as the Superuser
    reboot :  Restart the Terminal
    clear  :  Clear the Shell Output 

  <u>Additional Commands</u> :

    gui    :  Open the GUI version 
    todo   :  Stuff I may Do
    help   :  Display this help Section 
    banner :  Display Front Banner 

  <u>Key Bindings</u> :

    ctrl+c :  Terminate the current running process
    ctrl+l :  Clear the Shell Output
    tab    :  Trigger Autocompletion
  `;
};

export const whoami = (args?: string[]): string => {
  return "guest";
};

export const sudo = (args?: string[]): string => {
  setTimeout(function () {
    window.open("https://www.youtube.com/watch?v=EH9yR6T4ePI&t=62s", "_blank");
  }, 1500);

  return `[sudo] password for ${whoami()}:
${whoami()} is not in the sudoers file. This incident will be reported.`;
};
