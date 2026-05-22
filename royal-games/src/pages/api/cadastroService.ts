import { api } from "./api";

type CadastroFormulario = {
    Nome: string
    preco: string
    Descricao: string
    Imagem: string,
    GeneroIds: number[]
}

export async function cadastro(dados: CadastroFormulario ){
    try{
        const formData = new FormData

        formData.append("Nome", dados.Nome)
        formData.append("preco", dados.preco.toString())
        formData.append("Descricao", dados.Descricao)
        formData.append("Imagem", dados.Imagem)
        
        dados.GeneroIds.forEach((id) => {
            formData.append("GeneroIds", id.toString())
        })
        
        await api.post("/Jogo", formData)
    }catch(error: any){
        throw new Error(error.response.data)
    }
}