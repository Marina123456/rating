export default {
    group:{
        groupList: [
            {
                id:0,
                name: ""
            }
        ],
        groupByQuantumList:[
            {
                id:0,
                Name:""
            }
        ],
        groupByStudent: [
            {
                id:0,
                Name:""
            }
        ],
        idSelectedGroup: 0
    },
    student:{
        studentList: [
            {
                id:0, 
                fio:"", 
                dataBrth:"", 
                age:0, 
                scores:0,  
                rating:0
            }
        ],
        List_result : [
            {
                Status : "",
                pathToDocument : "",
                Type : "",
                Score : "",
                Level : "",
                EVENT : "",
                id : "",
                result : ""

            }
        ]
       
    },
    event: {
        eventList: [
            {
                Type : "",
                Level : "",
                Status : "",
                id : "",
                Name : "",
                date_from:"",
                date_to:""
            }
        ],
        resultAdd: 'OK'
    },
    status: {
        statusList: [
            {
                id : 0,
                Name : ""
            }
        ]
    },
    result: {
        resultList: [
            {
                id : 0,
                Name : ""
            }
        ]
    },
    level: {
        levelList: [
            {
                id : 0,
                Name : ""
            }
        ]
    },
    team: {
        teamList: [
            {
                id : 0,
                Name : "",
                teachers: [
                    {
                      fio: "",
                      id: "0"
                    }
                  ],
                  students: [
                    {
                      fio: "",
                      id: 0
                    }
                  ]
            }
        ]
    },
    type: {
        typeList: [
            {
                id : 0,
                Name : ""
            }
        ]
    },
    quantum: {
        quantumList: [
            {
                id:0,
                Name: ""
            }
        ]
    },
    teacher: {
        teacherList:[
            {
                id: 0,
                fio: ""
            }
        ],
        List_result: [
            {
               id: 0,
               EVENT: "",
               Status: "",
               Level: "",
               Type: "",
               result: "",
               name_team:"",
               pathToDocument: "",
               Score: ""
            }
        ]
    },
    auth: {
        currentUser: {
            id:-1,
            email: '',
            password: '',
            FIO: '',
            role: ''
        }
    }
    
};