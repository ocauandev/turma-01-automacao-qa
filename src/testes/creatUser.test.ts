import {expect, test} from 'vitest' 

interface User {
    name: string;
    age: number;

}


function createUser(name: string, age: number): User {
    return {name, age};
}

test("Criar usuario com nome e idade", () => {
    const user = createUser("João Leocadio", 30);
    expect(user).toEqual({name: "João Leocadio", age: 30})});