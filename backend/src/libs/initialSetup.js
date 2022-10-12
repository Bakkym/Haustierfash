import Role from "../models/Role";

export const createRoles = async () => {
  const count = await Role.estimatedDocumentCount(); // Counts roles
  try {
    if (count > 0) return;

    const values = await Promise.all([
      // Ejecutar todas las promesas al mismo tiempo
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
