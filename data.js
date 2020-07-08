const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Summit", role: ROLE.ADMIN },
    { id: 2, name: "Zabir", role: ROLE.BASIC },
    { id: 3, name: "Kashif", role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, mane: "summit project", userId: 1 },
    { id: 2, mane: "zabir project", userId: 2 },
    { id: 3, mane: "kashif project", userId: 3 },
  ],
};
