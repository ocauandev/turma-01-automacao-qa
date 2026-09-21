import{ expect, test, describe } from 'vitest'


function login(username: string, password: string): boolean {

    return username === 'admin' && password === 'admin';
}


test('Login com usuário e senha corretos', () => {

    const efetuandoLogin = login('admin', 'admin');
    
    expect(efetuandoLogin).toBe(true);
});





describe('Login Falha com credenciais inválidas', () => {



    test('Negar Login com usuário incorreto', () => {
        const efetuandoLogin = login('usuario', 'admin');
        
        expect(efetuandoLogin).toBe(false);
    });
    
    test('Negar Login com senha incorreta', () => {
        const efetuandoLogin = login('admin', 'senhaErrada');
        expect(efetuandoLogin).toBe(false);
    });

    test('Negar Login com usuario e senha incorretos', () => {
        const efetuandoLogin = login('usuario', 'senhaErrada');
        expect(efetuandoLogin).toBe(false);
    });

 

    //Login com campos vazios

    test('Negar Login com campos vazios', () => {
        const efetuandoLogin = login('', '');
        expect(efetuandoLogin).toBe(false);
    });

    test('Negar Login com usuário vazio', () => {
        const efetuandoLogin = login('', 'admin');
        expect(efetuandoLogin).toBe(false);
    });
    
    test('Negar Login com senha vazia', () => {
        const efetuandoLogin = login('admin', '');
        expect(efetuandoLogin).toBe(false);
    });     







})