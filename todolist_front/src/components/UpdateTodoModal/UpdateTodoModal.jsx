import ReactModal from 'react-modal';
import { updateTodoApi } from '../../apis/todoApi';

function UpdateTodoModal({ isModalOpen, setModalOpen, setUpdateTodo, updateTodo, requestTodoList }) {

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleUpdateInputChange = (e) => {
        setUpdateTodo(ut => ({
            ...ut,
            [e.target.name]: e.target.value
        }));
    };

    const handleUpdateSubmitClick = async () => {
        await requestUpdateTodo();
        closeModal();
        requestTodoList();
    }

    const requestUpdateTodo = async () => {
        await updateTodoApi(updateTodo.todoId, updateTodo);
        console.log(updateTodo);
        requestTodoList();
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
                    width: "550px",
                    height: "600px",
                    border: "3px solid #6a8ab1",
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "space-between",
                    overflow: "hidden"
                }
            }}
        >
            <div>
                <h2
                    style={{
                        padding: "6px",
                        borderBottom: "4px solid #D6E0F0",
                        marginBottom: "0px",
                        color: "#a3c2e5",
                        fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                        fontSize: "50px",
                        textShadow: "1px 1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000"
                    }}
                >
                    todo 내용 수정
                </h2>
                <div>
                    <input
                        type="text"
                        name="content"
                        onChange={handleUpdateInputChange}
                        style={{
                            boxSizing: "border-box",
                            width: "450px",
                            padding: "6px 20px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "40px",
                            cursor: "pointer"
                        }}
                    />
                    <input
                        type="date"
                        name="registerDate"
                        onChange={handleUpdateInputChange}
                        style={{
                            boxSizing: "border-box",
                            width: "450px",
                            padding: "6px 20px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "40px",
                            cursor: "pointer"
                        }}
                    />
                </div>
                <div>
                    <button
                        onClick={handleUpdateSubmitClick}
                        style={{
                            boxSizing: "border-box",
                            width: "450px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "40px",
                            cursor: "pointer"
                        }}
                    >
                        확인
                    </button>
                    <button
                        onClick={closeModal}
                        style={{
                            width: "450px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "40px",
                            cursor: "pointer"
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
