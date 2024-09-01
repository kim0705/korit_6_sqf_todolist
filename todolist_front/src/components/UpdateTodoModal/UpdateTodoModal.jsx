import axios from 'axios';
import ReactModal from 'react-modal';

function UpdateTodoModal({ isModalOpen, setModalOpen, setUpdateTodo, updateTodo, requestTodoList }) {

    const closeModal = () => {
        setModalOpen(false);
        setUpdateTodo({
            todoId: "",
            checkStatus: "",
            content: "",
            registerDate: "",
        })
    }

    const handleUpdateInputChange = (e) => {
        setUpdateTodo(ut => {
            return {
                ...ut,
                [e.target.name]: e.target.value
            };
        });
    }

    const handleUpdateSubmitClick = async () => {
        await requestUpdateTodo();
        closeModal();
        requestTodoList();
    }
    
    const requestUpdateTodo = async () => {
        // const response = await updateTodo(updateTodo.todoId, updateTodo);
        // console.log(updateTodo);
        // return response.data;

        let responseData = null;

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/todo/${updateTodo.todoId}`, updateTodo)
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
    }

    return (
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={{
                content: {
                    boxSizing: "border-box",
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                    padding: "20px",
                    width: "570px",
                    height: "750px",
                    border: "3px solid #6a8ab1",
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }
            }}
        >
            <div>
                <h2
                    style={{
                        padding: "6px",
                        borderBottom: "4px solid #D6E0F0",
                        color: "#a3c2e5",
                        fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                        fontSize: "60px",
                        textShadow: "1px 1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000",
                        alignItems: "center"
                    }}
                >
                    todo 내용 수정
                </h2>
                <div>
                    <input
                        type="text"
                        name="content"
                        onChange={handleUpdateInputChange}
                        value={updateTodo.content}
                        style={{
                            width: "450px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "50px"
                        }}
                    />
                    <input
                        type="date"
                        name="registerDate"
                        onChange={handleUpdateInputChange}
                        value={updateTodo.registerDate}
                        style={{
                            width: "450px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "50px"
                        }}
                    />
                </div>
                <div>
                    <button
                        onClick={handleUpdateSubmitClick}
                        style={{
                            width: "460px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "50px"
                        }}
                    >
                        확인
                    </button>
                    <button
                        onClick={closeModal}
                        style={{
                            width: "460px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "50px"
                        }}
                    >
                        취소
                    </button>
                </div>
            </div>
        </ReactModal>
    );
}

export default UpdateTodoModal;
