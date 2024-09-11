// Classe base para um funcionário
class Funcionario {
    constructor(nome, idFuncionario) {
        this.nome = nome;
        this.idFuncionario = idFuncionario;
        this.atividades = [];
    }

    adicionarAtividade(atividade) {
        this.atividades.push(atividade);
    }

    listarAtividades() {
        return this.atividades;
    }

    toString() {
        return `${this.nome} (ID: ${this.idFuncionario})`;
    }
}

// Classe para engenheiros
class Engenheiro extends Funcionario {
    constructor(nome, idFuncionario, especialidade) {
        super(nome, idFuncionario);
        this.especialidade = especialidade;
    }

    toString() {
        return `Engenheiro ${this.nome} (ID: ${this.idFuncionario}) - Especialidade: ${this.especialidade}`;
    }
}

// Classe para designers
class Designer extends Funcionario {
    constructor(nome, idFuncionario, ferramentaPreferida) {
        super(nome, idFuncionario);
        this.ferramentaPreferida = ferramentaPreferida;
    }

    toString() {
        return `Designer ${this.nome} (ID: ${this.idFuncionario}) - Ferramenta: ${this.ferramentaPreferida}`;
    }
}

// Classe para gerenciar funcionários
class Gerenciador {
    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    listarFuncionarios() {
        return this.funcionarios.map(funcionario => funcionario.toString());
    }

    adicionarAtividadeAFuncionario(idFuncionario, atividade) {
        const funcionario = this.funcionarios.find(f => f.idFuncionario === idFuncionario);
        if (funcionario) {
            funcionario.adicionarAtividade(atividade);
        } else {
            console.log("Funcionário não encontrado!");
        }
    }

    listarAtividadesDeFuncionario(idFuncionario) {
        const funcionario = this.funcionarios.find(f => f.idFuncionario === idFuncionario);
        if (funcionario) {
            return funcionario.listarAtividades();
        } else {
            console.log("Funcionário não encontrado!");
            return [];
        }
    }
}

// Exemplo de uso
function main() {
    const gerenciador = new Gerenciador();

    // Adicionando funcionários
    const eng1 = new Engenheiro("Fred", 1, "Mecânico");
    const des1 = new Designer("Maria", 2, "Photoshop");

    gerenciador.adicionarFuncionario(eng1);
    gerenciador.adicionarFuncionario(des1);

    // Adicionando atividades
    gerenciador.adicionarAtividadeAFuncionario(1, "Revisão de projeto");
    gerenciador.adicionarAtividadeAFuncionario(2, "Edição de Fotos");

    // Listando funcionários
    console.log("Funcionários:");
    gerenciador.listarFuncionarios().forEach(funcionario => console.log(funcionario));

    // Listando atividades
    console.log("\nAtividades do Funcionário ID 1:");
    gerenciador.listarAtividadesDeFuncionario(1).forEach(atividade => console.log(`- ${atividade}`));

    console.log("\nAtividades do Funcionário ID 2:");
    gerenciador.listarAtividadesDeFuncionario(2).forEach(atividade => console.log(`- ${atividade}`));
}

main();