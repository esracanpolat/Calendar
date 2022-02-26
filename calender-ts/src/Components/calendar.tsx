import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePlan, searchPlan, setNewPlan, editPlan } from '../redux/actions/action';
import Modal from "react-responsive-modal";

export default function Calendar() {
    const [time, setTime] = useState('');
    const [week, setWeek] = useState('');
    const [month, setMonth] = useState('');
    const [select, setSelect] = useState('D');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [detail, setDetail] = useState([])

    const dispatch = useDispatch();
    const Plans = useSelector((state: any) => state.calendarReducer).Plan;

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value);
    };
    const inputWeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeek(event.target.value);
    };
    const inputMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMonth(event.target.value);
    };

    const textInput = (event: React.FocusEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const titleInput = (event: React.FocusEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    console.log(Math.floor(Math.random() * 100), "=>id", Plans.filter((plan: any) => plan.type !== 'W'), Plans.filter((plan: any) => plan.type !== 'D'));

    function Save() {
        const uuid = Math.floor(Math.random() * 100);
        dispatch(setNewPlan({ id: Plans.includes(uuid) == false ? uuid : Math.floor(Math.random() * 100), body: text, title: title, time: time, type: select }));
        setTime('');
        setText('');
        setMonth('');
        setTitle('');
    }
    function OpenDetailModal(data: any) {
        setDetail(data);
        setOpenModal(true);
    }
    console.log(detail, "detail");

    function editPlan(ID: any) {
        dispatch(editPlan(ID))
    }
    function searchPlanFunc(e: React.ChangeEvent<HTMLInputElement>) {
        const newData = {
            data: e.target.value,
            type: select
        }
        dispatch(searchPlan(newData));
    }
    return (
        <div style={{ margin: 30 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "inline-flex" }}>
                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" className="btn-check" onClick={() => setSelect('M')} id="btncheck1" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor={"btncheck1"} >Aylık</label>

                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor={"btncheck2"} onClick={() => setSelect('W')} >Haftalık</label>

                        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor={"btncheck3"} onClick={() => setSelect('D')} >Günlük</label>
                    </div>
                </div>
                <div>
                    <button> Kaydet</button>
                </div>
            </div>
            <hr />
            <div className='row' style={{ marginTop: 50 }}>
                <div className='col'>
                    <div style={{ backgroundColor: "gray", borderRadius: 10, width: "100%", boxShadow: "5px 3px 22px 9px rgba(0,0,0,0.29)" }}>
                        <div style={{ padding: 20 }}>
                            {select == 'M' && <strong>Aylık Plan</strong>}
                            {select == 'D' && <strong>Günlük Plan</strong>}
                            {select == 'W' && <strong>Haftalık Plan</strong>}
                        </div>
                        <div style={{ padding: 50 }}>
                            <div style={{ marginTop: 30, display: "block" }}>
                                <label className="form-label">Zaman:</label>
                                {select == 'M' && <input
                                    className="form-control"
                                    type="month"
                                    value={month}
                                    onChange={inputMonth} />}
                                {select == 'W' &&
                                    <input type="week"
                                        className="form-control"
                                        value={week}
                                        onChange={inputWeek} />}
                                {select == 'D' && <input
                                    type="date"
                                    className="form-control"
                                    value={time}
                                    onChange={inputHandler} />}
                                <div>
                                    <label className="form-label">Başlık:</label>
                                    <input type="textarea" className="form-control" defaultValue={title} height={300} width={500} onBlur={titleInput} />
                                </div>
                                <div>
                                    <label className="form-label">Açıklama:</label>
                                    <input className="form-control" type="textarea" defaultValue={text} height={300} width={500} onBlur={textInput} />
                                </div>
                                <div className='d-flex justşfy-content-end mt-4'>
                                    <button className='primary' onClick={() => Save()}>Planla</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='col'>
                    {/* <input type="text" width="100%" onChange={(e) => searchPlanFunc(e)} /> */}
                    <div>
                        {select == 'M' && Plans && Plans.filter((plan: any) => plan.type == 'M') && Plans.filter((plan: any) => plan.type == 'M').map((data: any) =>
                        (<ul className="list-group">
                            <li className="list-group-item">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>{data.title}</div>
                                    <div><button className="mr-4" onClick={() => setOpenModal(true)}>detay</button>
                                        <button className="danger" onClick={() => dispatch(deletePlan(data.id))}>Sil</button></div>
                                </div>
                            </li>
                        </ul>)
                        )}
                        {select == 'W' && Plans && Plans.filter((plan: any) => plan.type == 'W') && Plans.filter((plan: any) => plan.type == 'W').map((data: any) =>
                        (<ul className="list-group">
                            <li className="list-group-item">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>{data.title}</div>
                                    <div>
                                        <button className="mr-4" onClick={() => setOpenModal(true)}>detay</button>
                                        <button className="danger" onClick={() => dispatch(deletePlan(data.id))}>Sil</button></div>
                                </div>
                            </li>
                        </ul>)
                        )}
                        {select == 'D' && Plans && Plans.filter((plan: any) => plan.type == 'D') && Plans.filter((plan: any) => plan.type == 'D').map((data: any) =>
                        (<ul className="list-group">
                            <li className="list-group-item">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>{data.title}jdıejıdjeıfjrıo</div>
                                    <div><button className="mr-4" onClick={() => OpenDetailModal(data)}>detay</button>
                                        <button className="danger" onClick={() => dispatch(deletePlan(data.id))}>Sil</button></div>
                                </div>
                            </li>
                        </ul>)
                        )}
                    </div>
                </div>
            </div>
            <Modal
                open={openModal} onClose={() => setOpenModal(false)} center>
                <div style={{ minWidth: 300, minHeight: 400 }}>
                    <div><label>başlık:</label><label contentEditable="true">{detail && detail}</label></div>
                    <div><label>Açıklama:</label><label contentEditable="true">{detail && detail}</label></div>
                    <div style={{ display: "flex", justifyContent: "end" }}><button onClick={(e) => editPlan(e)}> Düzenle</button></div>
                </div>
            </Modal>
        </div>
    )
}
