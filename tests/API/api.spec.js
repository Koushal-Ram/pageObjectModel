import{test, expect} from "@playwright/test";

test("GET request", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.headers()['content-type']).toBe("application/json; charset=utf-8"); // content-type in lowercase
    expect(response.headers()['cache-control']).toBe("public, max-age=14400, s-maxage=60");
    
    const responseTime = response.timing().responseEnd - response.timing().requestStart;
    expect(responseTime).toBeLessThan(600);
})

test("POST request", async({request})=>{
    const responseBody = await request.post("https://reqres.in/api/users",{
        "body": {
         id: 13,
      email: 'boshel.howell@reqres.in',
      first_name: 'Randy',
      last_name: 'Orton',
      avatar: 'https://reqres.in/img/faces/12-image.jpg'
        }
    });

    expect(responseBody.status()).toBe(201);
    expect(responseBody.statusText()).toBe("Created");
    expect([200, 201]).toContain(responseBody.status());

    const responseTiming = responseBody.timing().responseEnd-responseBody.timing().requestStart;
    expect(responseTiming).toBeLessThan(500);

})

test("PUT request", async({request})=>{
    const response = await request.put("https://reqres.in/api/users/2", {
        "body":{
                  id: 17,
      email: 'obamma.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'jackson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg'
        }
    });

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.headers()['content-type']).toBe("application/json; charset=utf-8");
    expect(response.headers()['server']).toBeTruthy();
    const time = response.timing().responseEnd - response.timing().requestStart;
    expect(time).toBeLessThan(500);

})

test("DELETE request", async({request})=>{
    const response = await request.delete("https://reqres.in/api/users/2");

    expect(response.status()).toBe(204);
    const time = response.timing().responseEnd - response.timing().requestStart;
    expect(time).toBeLessThan(500);

})

test("check the data in the response body", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data);

    expect(data.page).toBe(2);  
    expect(typeof data).toBe("object");
    expect(typeof data.data[0].id).toBe("number");

    expect(data.data[0].id).toBe(7);
    expect(data.data[0].email).toBe("michael.lawson@reqres.in")
} )

/*

const data = {
    courses: ["Java", "Python", "C++"]
};

expect(data.courses).toContain("Java");
expect(data.courses).toContain("Python");
expect(data.courses).toContain("C++");

expect(data.courses).toHaveLength(3);

expect(data.courses).toEqual(["Java", "Python", "C++"]);

---------------------------------------------------------
const data = {
    student: {
        name: "Koushal",
        age: 25,
        course: "Java"
    }
};

expect(data.student.name).toBe("Koushal");
expect(data.student.age).toBe(25);
expect(data.student.course).toBe("Java");


expect(data.student).toHaveProperty("name"); checks property existence

expect(data.student).toHaveProperty("name", "Koushal"); check property and value 


ENTIRE OBJECT

expect(data.student).toEqual({
    name: "Koushal",
    age: 25,
    course: "Java"
});

*/