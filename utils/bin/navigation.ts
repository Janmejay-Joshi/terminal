export const ls = (args?: string[]): string => {
  return "Under Construction... ";
};

export const cd = (args?: string[]): string => {
  return "Under Construction... ";
};

export const pwd = (args?: string[]): string => {
  return "/home/guest";
};

/* Read Only */

export const rm = (args?: string[]): string => {
  if (args?.length)
    return `rm: cannot remove '${args[0]}': Read-only file system`;
  else return "rm: missing operand";
};

export const mkdir = (args?: string[]): string => {
  if (args?.length) return `Error creating directory: Read-only file system`;
  else return "mkdir: missing operand";
};

export const touch = (args?: string[]): string => {
  if (args?.length)
    return `touch: cannot touch '${args[0]}': Read-only file system`;
  else return "touch: missing file operand";
};
