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
        ("Nicholas", "Haretakis", 4, 1),
        ("Nick", "Haretakis", 2, 1),
        ("Nickolas", "Haretakis", 3, 1),
        ("Nicolas", "Haretakis", 1, 1),
        ("icholas", "Haretakis", 5, 2);