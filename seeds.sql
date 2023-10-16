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


INSERT INTO employees (first_name, last_name, job_title, department_name,salary, manager_id)
VALUES ("Jennifer", "Bui","VP of Engineering", "Engineering", 200000, NULL),
       ("Kelly", "Chau", "Software Engineer", "Engineering",100000, 1),
       ("Lydia", "Tran", "Solutions Engineer", "Engineering", 85000, 1),
       ("Jessica", "Nguyen", "VP of Accounts", "Support", 110000, NULL),
       ("Caroline", "Pham", "Account Manager","Support", 75000,4),
       ("Shannon","Luu", "VP of Sales", "Sales", 120000, NULL),
       ("Monica", "Hu", "Sales Representative","Sales", 70000,6),
       ("Rachel", "Chang", "Human Resources Manager","Human Resources", 85000,6),
       ("Kathy", "Yee", "Director of Operations","Operations", 100000, NULL),
       ("Christine", "Kim", "Administrative Assistant","Operations", 50000,9);