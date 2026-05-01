type UserRole = "admin" | "user" | "agent";

const checkAccess = (role: UserRole): string => {
  if (role === "admin") {
    return "Full Access";
  } else if (role === "agent") {
    return "Limited Access";
  } else {
    return "User Access";
  }
};

console.log(checkAccess("agent"));

// Intersection

type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  salary: number;
};


type Employee = Person & Job;

const emp1: Employee = {
  name: "Alamin",
  age: 22,
  position: "Developer",
  salary: 50000,
};

console.log(emp1);


type User = {
  id: number;
  email: string;
};

type Admin = {
  role: "admin";
  permissions: string[];
};

type AdminEmployee = User & Admin;

const admin1: AdminEmployee = {
  id: 1,
  email: "admin@gmail.com",
  role: "admin",
  permissions: ["manage-users", "view-reports"],
};

console.log(admin1);