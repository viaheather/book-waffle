INSERT INTO departments (department_name)
VALUES ("Engineering"),
       ("Support"),
       ("Sales"),
       ("Human Resources"),
       ("Operations");

INSERT INTO roles (job_title, department_name, salary)
VALUES ("VP of Engineering", "Engineering", 200000),
       ("Software Engineer", "Engineering", 100000),
       ("Solutions Engineer", "Engineering", 85000),
       ("VP of Accounts", "Support", 110000),
       ("Account Manager","Support", 75000),
       ("VP of Sales", "Sales", 120000),
       ("Sales Representative","Sales", 70000),
       ("Human Resources Manager","Human Resources", 85000),
       ("Director of Operations","Operations", 100000),
       ("Administrative Assistant","Operations", 50000);


INSERT INTO employees (first_name, last_name, salary, manager_id)
VALUES ("Jennifer", "Bui", 200000, NULL),
       ("Kelly", "Chau", 100000),
       ("Lydia", "Tran", 85000),
       ("Jessica", "Nguyen", 110000, NULL),
       ("Caroline", "Pham", 75000),
       ("Shannon","Luu", 120000, NULL),
       ("Monica", "Hu", 70000),
       ("Rachel", "Chang", 85000),
       ("Kathy", "Yee", 100000, NULL),
       ("Christine", "Kim", 50000);