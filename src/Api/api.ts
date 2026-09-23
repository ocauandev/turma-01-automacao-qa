interface Postagem {
    id: number;
    title: string;
    body: string;
}

const url = 'https://jsonplaceholder.typicode.com/'
// GET: Buscar postagem


async function buscarPostagem(id: number): Promise<Postagem>{

    const res = await fetch(`${url}posts/${id}`);

    console.log('STATUS');
    console.log(res.status)



    const resGet = await res.json() as Postagem

    return resGet

    
}



async function buscarTodasPostagem(): Promise<Postagem>{

    const res = await fetch(`${url}posts/`);

    console.log('STATUS');
    console.log(res.status)



    const resGet = await res.json() as Postagem

    return resGet

    
}


async function buscarComentariosPostagem(id: number): Promise<Postagem>{

    const res = await fetch(`${url}posts/${id}/comments`);

    console.log('STATUS');
    console.log(res.status)



    const resGet = await res.json() as Postagem

    return resGet

    
}
//POST: Criar uma nova postagem

async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(`${url}posts/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Nova Postagem',
            body: 'Conteúdo da nova postagem',
            userId: 1,
        })
    });


    console.log('STATUS');
    console.log(res.status);

    const resPost = await res.json() as Postagem;

    return resPost;

     
    


    }
        
    




 






    async function atualizarPostagemCompleta(id: number): Promise<Postagem> {

        const  corpoEnviado = {
            title: 'Postagem Atualizada',
            body: 'Conteúdo atualizado da postagem',
            userId: 1,
        };
        
        const res = await fetch(`${url}posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpoEnviado)
        });

         console.log("Corpo Enviado");
         console.log(corpoEnviado);
         console.log('Status:', res.status);
        return res.json() as Promise<Postagem>;
    }




async function deletar(id: number): Promise<void> {
        const res = await fetch(`${url}posts/${id}`, {
            method: 'DELETE'
        });

        console.log('Status:', res.status);
        return;

}   



async function atualizarPostagemParcial(id: number): Promise<Postagem> {
    const corpoEnviado = {
        title: 'Título Atualizado',
    };

    const res = await fetch(`${url}posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpoEnviado)
    });

    console.log("Corpo Enviado");
    console.log(corpoEnviado);
    console.log('Status:', res.status);

    console.log('Corpo de Resposta:');
    const responseBody = await res.text();
    console.log(responseBody);

    return res.json() as Promise<Postagem>;

}





