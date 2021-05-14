import fs from 'fs'

export class Service {
    constructor() {
    }

    async readTodoList() {
        const filePath = __dirname + '/TodoList.csv'

        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: [] = []
        const headers = lines[0].split(',')
        for (let i = 1; i < lines.length; i++) {
            let obj: {} = {}
            if (lines[i] == undefined || lines[i].trim() == "") {
                continue;
            }
            let words = lines[i].split(',');
            for (let j = 0; j < words.length; j++) {
                obj[headers[j].trim()] = words[j];
            }
            //@ts-ignore
            result.push(obj);
        }
        return result;
    }

    async addTodoList(id: string, item: string | null, content: string | null, dueDate: string | null, startDate: string | null, startTime: string | null, endDate: string | null, endTime: string | null, category: string | null, assignedTo: string | null, statu: string | null) {

        const filePath = __dirname + '/TodoList.csv'
        const reformedInput = "\n" + id + "," + item + "," + content + "," + dueDate + "," + startDate + "," + startTime + ","  + endDate + "," +  endTime + "," + category + "," + assignedTo + "," + statu;

        await fs.appendFile(filePath, reformedInput, (e) => console.log(e))

        const csvFileData = await fs.readFileSync(filePath, 'utf8')
        console.log(csvFileData)
        return { 'status': 'ok' }
    }

    async deleteTodoList(id: string) {

        const filePath = __dirname + '/TodoList.csv'
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: string = "";
        for (let i = 0; i < lines.length; i++) {
            if (lines[i] == undefined || lines[i].trim() == "") continue;
            let words = lines[i].split(',');
            if (words[0] == id) continue;
            for (let j = 0; j < lines[i].length; j++) {
                if (words[j] == undefined || words[j].trim() == "") continue;
                result = result + "," + words[j]
            }
            result = result + "\n"
        }
        await fs.promises.writeFile(filePath, result)

        return { 'result': 'deleted' }
    }

}