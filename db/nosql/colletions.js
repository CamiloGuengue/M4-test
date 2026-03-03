use('Cluster0');
db.customers.insertMany(
    [
    {"full_name":"juan perez","email":"guenguec@gmail.com","phone":3001234567},
    {"full_name":"maria rodriguez","email":"maria.rod@gmail.com","phone":3109876543},
    {"full_name":"carlos gomez","email":"carlos.g@hotmail.com","phone":3205551234},
    {"full_name":"ana torres","email":"ana.torres@outlook.com","phone":3004445566},
    {"full_name":"pedro martinez","email":"pedro.martinez@yahoo.com","phone":3151112233},
    {"full_name":"luisa fernandez","email":"luisa.fer@gmail.com","phone":3169998877},
    ]
)

db.suppliers.insertMany(
    [ 
        {"name":"TechDistro","contact":"ventas@techdistro.com"},
        {"name":"Accesorios","contact":"contacto@accesoriostotal.com"},
        {"name":"MueblesYa","contact":"info@mueblesya.com"},
        {"name":"GamerZone","contact":"sales@gamerzone.co"},
        {"name":"IluminaTodo","contact":"entas@iluminatodo.co"}

    ]
    
)

