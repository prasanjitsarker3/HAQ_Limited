import React from 'react';

const CustomViewTable = (props) => {
    const { tableHead, data } = props;
    return (
        <div className='customTableView'>
            <table>
                {tableHead && (
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'center', color: "#32398F" }}>
                            {tableHead}
                        </th>
                    </tr>
                )}
                {
                    data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.key}</td>
                            <td>{item.value || "N/A"}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
};

export default CustomViewTable;