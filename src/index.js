
// You should implement your task here.

module.exports = function towelSort (matrix) {
// Возвращаем пустой массив, если в массив не переданы данные или матрица пустая
    const arr = []
if (arr == undefined || matrix == undefined || matrix.length == 0) {
    return []
}
// переворачиваем нечётные строки
 for (i = 1; i < matrix.length; i += 2){
     matrix[i] = matrix[i].reverse();
 }
//  с помощью метода reduce и concat возвращаем новый отсортированный массив
 let newArray = [];
 newArray = matrix.reduce((x, y) => x.concat(y), []);
 return newArray;
 }

