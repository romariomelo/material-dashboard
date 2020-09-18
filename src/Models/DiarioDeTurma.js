import Api from 'src/services/Api';

export async function getDiario(turma, mes) {
  try {
    const response = await Api.get(`/DiarioTurma/diarioDeTurma/turma/${turma}/mes/${mes}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
