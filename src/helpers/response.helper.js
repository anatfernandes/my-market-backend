import httpStatus from "http-status";

function OK({ res, body }) {
	return res.status(httpStatus.OK).send(body);
}

function BAD_REQUEST({ res, message }) {
	const body = { message: message || "Requisição inválida!" };
	return res.status(httpStatus.BAD_REQUEST).send(body);
}

function NOT_FOUND({ res, message }) {
	const body = { message: message || "Nenhum resultado foi encontrado!" };
	return res.status(httpStatus.NOT_FOUND).send(body);
}

function SERVER_ERROR({ res, message }) {
	const body = { message: message || "Ocorreu um erro inesperado!" };
	return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(body);
}

const responseHelper = {
	OK,
	BAD_REQUEST,
	NOT_FOUND,
	SERVER_ERROR,
};

export { responseHelper };
