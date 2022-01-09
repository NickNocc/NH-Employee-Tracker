INSERT INTO department (department_name)
    VALUES
        ("Finance"),
        ("Trucking"),
        ("Human Resources"),
        ("Legal"),
        ("semiLegal");

INSERT INTO role (role_title, role_salary, department_id)
    VALUES 
        ("Manager", 69696, 3),
        ("Manager", 69696, 4),
        ("Lawyer", 420420, 4),
        ("Laywer", 69420, 5),
        ("MoneyMan", 123456, 1),
        ("Truck Manager", 54321, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  
        ("Nicholas", "Haetakis", 4, 1),
        ("Nick", "Takis", 2, 1),
        ("Nickolas", "Hakis", 3, 1),
        ("Nicolas", "Haris", 1, 1),
        ("icholas", "Retakis", 5, 2);