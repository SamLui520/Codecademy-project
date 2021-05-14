function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

async function fetchTodoList() {
    const data = await fetch('http://localhost:8080/todolist')
    const jsonResponse = await data.json()
    let displayArea = document.querySelector('#fetch-area')
    let displayhtml = ""
    for (let i of jsonResponse) {
        displayhtml = displayhtml +
        `<div class="row" style="padding: 40px; border-style: groove;">
        <div class="col-12">
        <h2>
            <p>Task<a>${i.id}</a></p>
        </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Item: ${i.item}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Due Date: ${i.dueDate}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Start Date: ${i.startDate}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Start Time: ${i.startTime}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>End Date: ${i.endDate}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>End Time: ${i.endTime}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
        <h2>
            <p>category: ${i.category}</p>
        </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Assigned To: ${i.assignedTo}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Description: ${i.content}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>                     
                <p>status: ${i.statu}</p>
            </h2>
        </div>

        <div class="d-flex flex-row-reverse">
        <div class="p-2 ">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 30px; height: 30px;">
        <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
        <div class="p-2 ">
        <button type="submit" class="btn bg-success edit">
            Edit
        </button>
        </div>
        <div class="p-2 ">
        <button type="submit" class="btn bg-danger delete">
            Delete
        </button>
        </div>
        </div>
    </div>`
    }
    displayArea.innerHTML = displayhtml;
};
async function fetchTodoList2() {
    const data = await fetch('http://localhost:8080/todolist')
    const jsonResponse = await data.json()
    let displayArea = document.querySelector('#fetch-area2')
    let displayhtml = ""
    for (let i of jsonResponse) {
        displayhtml = displayhtml +
            `<div class="row" style="padding: 40px; border-style: groove;">
        <div class="col-12">
        <h2>
            <p>Task<a>${i.id}</a></p>
        </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Item: ${i.item}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Due Date: ${i.dueDate}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Start Date: ${i.startDate}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Start Time: ${i.startTime}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>End Date: ${i.endDate}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>End Time: ${i.endTime}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
        <h2>
            <p>category: ${i.category}</p>
        </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Assigned To: ${i.assignedTo}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>Description: ${i.content}</p>
            </h2>
        </div>
        <div class="col-6" style="line-height: 50px;">
            <h2>                     
                <p>status: ${i.statu}</p>
            </h2>
        </div>
        <div class="d-flex flex-row-reverse">
        <div class="p-2 ">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 30px; height: 30px;">
        <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
        <div class="p-2 ">
        <button type="submit" class="btn bg-success edit">
            Edit
        </button>
        </div>
        <div class="p-2 ">
        <button type="submit" class="btn bg-danger delete">
            Delete
        </button>
        </div>
        </div>
    </div>`
    }
    displayArea.innerHTML = displayhtml;
};


// example for fetch: POST with JSON format
const fetchAddItem = document.querySelector('#fetchAddItem')
fetchAddItem.addEventListener('submit', async(event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['id'] = form.fetchId.value;
    formObject['item'] = form.fetchItem.value;
    formObject['assignedTo'] = form.fetchAssignedTo.value;
    formObject['statu'] = form.fetchStatu.value;
    formObject['category'] = form.fetchCategory.value;
    formObject['dueDate'] = form.fetchDueDate.value;
    formObject['startDate'] = form.fetchStartDate.value;
    formObject['startTime'] = form.fetchStartTime.value;
    formObject['endDate'] = form.fetchEndDate.value;
    formObject['endTime'] = form.fetchEndTime.value;
    formObject['content'] = form.fetchDescription.value;
    const response = await fetch('http://localhost:8080/todolist', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formObject),
    })
})

fetchTodoList();
fetchTodoList2();


