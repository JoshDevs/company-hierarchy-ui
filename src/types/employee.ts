export interface EmployeeProps {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    picture: string;
}

export interface EmployeeHierarchyType {
    parent: EmployeeProps;
    children?: readonly EmployeeHierarchyType[];
}