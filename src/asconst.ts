// value use best way
// const UserRoles = {
//     Admin: "Admin",
//     Editor: "Editor",
//     Viewer: "Viewer",
// } as const;

// type Role = typeof UserRoles[keyof typeof UserRoles];
// // "Admin" | "Editor" | "Viewer"


// const canEdit = (role: Role) => {
//     return role === UserRoles.Admin || role === UserRoles.Editor;
// }

// const result = canEdit(UserRoles.Admin);
// console.log(result);

const Permissions = {
    READ: "read",
    WRITE: "write",
    DELETE: "delete",
};

type PermissionType = typeof Permissions[keyof typeof Permissions];

const hasWriteAccess = (permission: PermissionType) => {
    return permission === Permissions.READ;
};

// console.log(hasWriteAccess("write")); // true
// console.log(hasWriteAccess("read"));  // false

// const Roles = {
//     Admin: "ADMIN",
//     User: "USER",
//     Guest: "GUEST",
// } as const;

// type RoleType = typeof Roles[keyof typeof Roles];

// const getDashboard = (role: RoleType): string => {
//     if (role === Roles.Admin) {
//         return "Full Access Dashboard";
//     } else if (role === Roles.User) {
//         return "User Dashboard";
//     }
//     else {
//         return "Guest";
//     }
// };

// console.log(getDashboard("USER"));


// key use
const Roles = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST",
} as const;

const isAdmin = (role: keyof typeof Roles) => {
    return role === "Admin"; // key compare
};

// test
console.log(isAdmin("Admin")); // true
console.log(isAdmin("User"));  // false