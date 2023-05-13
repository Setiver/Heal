import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Heal = () => {
  const [checked, setChecked] = useState(Array(40).fill(false));

  const [timeHeal, setTimeHeal] = useState(Array(40).fill(0));
  const [moneyRepair, setMoneyRepair] = useState(Array(40).fill(0));
  const [timeRepair, setTimeRepair] = useState(Array(40).fill(0));
  const [injuryHolder, setInjuryHolder] = useState(Array(30).fill(0));

  const [fullTimeHeal, setFullTimeHeal] = useState([]);

  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  function handleCheck(index, hours, money, repair, injury) {
    const newChecked = [...checked];
    const newTimeHeal = [...timeHeal];
    const newMoneyRepair = [...moneyRepair];
    const newTimeRepair = [...timeRepair];
    const newInjury = [...injuryHolder];

    newChecked[index] = !checked[index];
    setChecked(newChecked);

    if (!checked[index]) {
      newTimeHeal[index] = hours;
      newMoneyRepair[index] = money;
      newTimeRepair[index] = repair;
      newInjury[index] = injury;

      setTimeHeal(newTimeHeal);
      setMoneyRepair(newMoneyRepair);
      setTimeRepair(newTimeRepair);
      setInjuryHolder(newInjury);
    } else {
      newTimeHeal[index] = 0;
      newMoneyRepair[index] = 0;
      newTimeRepair[index] = 0;
      newTimeRepair[index] = 0;

      setTimeHeal(newTimeHeal);
      setMoneyRepair(newMoneyRepair);
      setTimeRepair(newTimeRepair);
      setInjuryHolder(newInjury);
    }
  }

  useEffect(() => {
    const fullArrayOfAll = timeHeal
      .map((time, index) => ({
        time: time,
        price: moneyRepair[index],
        repairT: timeRepair[index],
        injury: injuryHolder[index],
      }))
      .sort((a, b) => b.time - a.time)
      .filter(obj => obj.time !== 0 && obj.price !== 0 && obj.repairT !== 0 && obj.injury !== 0);

    const finalTimeHeal = fullArrayOfAll.map((obj, index) => {
      const percentIncrease = (index + 1) * 10;
      const increaseTime = obj.time * (percentIncrease / 100);
      const increaseRepairT = obj.repairT * (percentIncrease / 100);
      const modifiedObj = {
        ...obj,
        time: Math.round(obj.time + increaseTime),
        repairT: Math.round(obj.repairT + increaseRepairT),
      };
      return modifiedObj;
    });
    setFullTimeHeal(finalTimeHeal);
  }, [timeHeal, moneyRepair, timeRepair, injuryHolder]);

  const MedicalBill = () => {
    const medical = fullTimeHeal.map((obj, index) => (
      <tr key={index}>
        <th scope="row">X</th>
        <td>{obj.injury}</td>
        <td>{Math.round((obj.time / 24) * 10) / 10}d</td>
        <td>{obj.price}G</td>
        <td>{Math.round((obj.repairT / 24) * 10) / 10}d</td>
      </tr>
    ));
    return <>{medical}</>;
  };

  // ------------------------ //
  return (
    <>
      {/* -------------------------- */}
      <div className={`blocker ${show ? 'visible' : ''}`} onClick={show ? handleShowClick : null}>
        <div className={`app ${show ? 'blur' : ''}`}>
          {/* -------------------Wounds------------------- */}
          <table
            className={`table table-success table-dark table-striped table-bordered table-wounds`}>
            <thead>
              <tr className=" table-text-up">
                <th scope="col" colSpan="5">
                  Wounds
                </th>
              </tr>
            </thead>

            <thead>
              <tr className="">
                <th scope="col">✅</th>
                <th scope="col">Injury</th>
                <th scope="col">Time</th>
                <th scope="col">Cost</th>
                <th scope="col">Healing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[0]}
                      onChange={() => handleCheck(0, 6, 10, 0.5, 'Scratch')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Scratch</td>
                <td>6h</td>
                <td>10G</td>
                <td>30m</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[1]}
                      onChange={() => handleCheck(1, 12, 30, 1, 'Few Cuts')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Few Cuts</td>
                <td>12h</td>
                <td>30G</td>
                <td>1h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[2]}
                      onChange={() => handleCheck(2, 24, 70, 2, 'Dozen Cuts')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Dozen Cuts</td>
                <td>24h</td>
                <td>70G</td>
                <td>12h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[3]}
                      onChange={() => handleCheck(3, 2 * 24, 100, 6, 'Tens Cuts')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Tens Cuts</td>
                <td>2d</td>
                <td>100G</td>
                <td>6h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[30]}
                      onChange={() => handleCheck(30, 2 * 24, 300, 3, 'Severed skin')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Severed skin</td>
                <td>2d</td>
                <td>300G</td>
                <td>3h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[4]}
                      onChange={() => handleCheck(4, 4 * 24, 1000, 12, 'Torn tendons')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Torn tendons</td>
                <td>4d</td>
                <td>1.000G</td>
                <td>12h</td>
              </tr>
            </tbody>
          </table>
          {/* -------------------Burns------------------- */}
          <table className="table table-success table-dark table-striped table-bordered table-burns">
            <thead>
              <tr className=" table-text-up">
                <th scope="col" colSpan="5">
                  Burns
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="">
                <th scope="col">✅</th>
                <th scope="col">Injury</th>
                <th scope="col">Time</th>
                <th scope="col">Cost</th>
                <th scope="col">Healing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[5]}
                      onChange={() => handleCheck(5, 24, 50, 2, '1st degree')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>1st degree</td>
                <td>1d</td>
                <td>50G</td>
                <td>2h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[6]}
                      onChange={() => handleCheck(6, 3 * 24, 100, 5, '2nd degree')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>2nd degree</td>
                <td>3d</td>
                <td>100G</td>
                <td>5h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[7]}
                      onChange={() => handleCheck(7, 10 * 24, 200, 24, '3rd degree')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>3rd degree</td>
                <td>10d</td>
                <td>200G</td>
                <td>1d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[8]}
                      onChange={() => handleCheck(8, 25 * 24, 1500, 4 * 24, '4th degree')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>4th degree</td>
                <td>25d</td>
                <td>1.500G</td>
                <td>4d</td>
              </tr>
            </tbody>
          </table>
          {/* -------------------Breaks------------------- */}
          <table className="table table-success table-dark table-striped table-bordered table-breaks">
            <thead>
              <tr className=" table-text-up">
                <th scope="col" colSpan="5">
                  Breaks
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="">
                <th scope="col">✅</th>
                <th scope="col">Injury</th>
                <th scope="col">Time</th>
                <th scope="col">Cost</th>
                <th scope="col">Healing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[9]}
                      onChange={() => handleCheck(9, 4 * 24, 400, 24, 'Finger')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Finger</td>
                <td>4d</td>
                <td>400G</td>
                <td>1d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[10]}
                      onChange={() => handleCheck(10, 7 * 24, 2000, 2 * 24, 'Left Arm')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Arm</td>
                <td>7d</td>
                <td>2.000G</td>
                <td>2d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[31]}
                      onChange={() => handleCheck(31, 7 * 24, 2000, 2 * 24, 'Right Arm')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Right Arm</td>
                <td>7d</td>
                <td>2.000G</td>
                <td>2d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[11]}
                      onChange={() => handleCheck(11, 8 * 24, 2500, 2.5 * 24, 'Left Leg')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Leg</td>
                <td>8d</td>
                <td>2.500G</td>
                <td>2.5d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[32]}
                      onChange={() => handleCheck(32, 8 * 24, 2500, 2.5 * 24, 'Right Leg')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Right Leg</td>
                <td>8d</td>
                <td>2.500G</td>
                <td>2.5d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[12]}
                      onChange={() => handleCheck(12, 3 * 24, 500, 12, 'Rib')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Rib</td>
                <td>3d</td>
                <td>500G</td>
                <td>12h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[33]}
                      onChange={() => handleCheck(33, 10 * 24, 3000, 2 * 24, 'Half of Ribs')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Half of Ribs</td>
                <td>10d</td>
                <td>3.000G</td>
                <td>2d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[34]}
                      onChange={() => handleCheck(34, 25 * 24, 5000, 5 * 24, 'All Ribs')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>All Ribs</td>
                <td>25d</td>
                <td>5.000G</td>
                <td>5d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[13]}
                      onChange={() => handleCheck(13, 40 * 24, 5000, 5 * 24, 'Skull')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Skull</td>
                <td>40d</td>
                <td>5.000G</td>
                <td>5d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[14]}
                      onChange={() => handleCheck(14, 80 * 24, 20000, 10 * 24, 'Spine')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Spine</td>
                <td>80d</td>
                <td>20.000G</td>
                <td>10d</td>
              </tr>
            </tbody>
          </table>
          {/* -------------------LossOf------------------- */}
          <table className="table table-success table-dark table-striped table-bordered table-lossof ">
            <thead>
              <tr className=" table-text-up">
                <th scope="col" colSpan="5">
                  Loss of
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="">
                <th scope="col">✅</th>
                <th scope="col">Injury</th>
                <th scope="col">Time</th>
                <th scope="col">Cost</th>
                <th scope="col">Healing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[15]}
                      onChange={() => handleCheck(15, 14 * 24, 1000, 2 * 24, 'Finger')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Finger</td>
                <td>14d</td>
                <td>1.000G</td>
                <td>2d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[16]}
                      onChange={() => handleCheck(16, 7 * 24, 5000, 1.5 * 24, 'Left Hand')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Hand</td>
                <td>40d</td>
                <td>5.000G</td>
                <td>3d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[35]}
                      onChange={() => handleCheck(35, 7 * 24, 5000, 1.5 * 24, 'Right Hand')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Right Hand</td>
                <td>40d</td>
                <td>5.000G</td>
                <td>3d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[17]}
                      onChange={() => handleCheck(17, 100 * 24, 20000, 10 * 24, 'Left Arm')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Arm</td>
                <td>100d</td>
                <td>20.000G</td>
                <td>10d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[36]}
                      onChange={() => handleCheck(36, 100 * 24, 20000, 10 * 24, 'Right Arm')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Right Arm</td>
                <td>100d</td>
                <td>20.000G</td>
                <td>10d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[18]}
                      onChange={() => handleCheck(18, 40 * 24, 6000, 4 * 24, 'Left Foot')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Foot</td>
                <td>40d</td>
                <td>6.000G</td>
                <td>4d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[37]}
                      onChange={() => handleCheck(37, 40 * 24, 6000, 4 * 24, 'Right Foot')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Right Foot</td>
                <td>40d</td>
                <td>6.000G</td>
                <td>4d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[19]}
                      onChange={() => handleCheck(19, 110 * 24, 21000, 12 * 24, 'Left Leg')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Leg</td>
                <td>110d</td>
                <td>21.000G</td>
                <td>12d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[38]}
                      onChange={() => handleCheck(38, 110 * 24, 21000, 12 * 24, 'Right Leg')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Right Leg</td>
                <td>110d</td>
                <td>21.000G</td>
                <td>12d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[20]}
                      onChange={() => handleCheck(20, 520 * 24, 80000, 40 * 24, 'Left Eye')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Eye</td>
                <td>520d</td>
                <td>80.000G</td>
                <td>40d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[39]}
                      onChange={() => handleCheck(39, 520 * 24, 80000, 40 * 24, 'Left Eye')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Eye</td>
                <td>520d</td>
                <td>80.000G</td>
                <td>40d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[21]}
                      onChange={() => handleCheck(21, 80 * 24, 30000, 10 * 24, 'Nose')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Nose</td>
                <td>80d</td>
                <td>30.000G</td>
                <td>10d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[22]}
                      onChange={() => handleCheck(22, 50 * 24, 20000, 6 * 24, 'Left Ear')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Left Ear</td>
                <td>50d</td>
                <td>20.000G</td>
                <td>6d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[40]}
                      onChange={() => handleCheck(40, 50 * 24, 20000, 6 * 24, 'Right Ear')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Right Ear</td>
                <td>50d</td>
                <td>20.000G</td>
                <td>6d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[23]}
                      onChange={() => handleCheck(23, 60 * 24, 20000, 6 * 24, 'Tongue')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Tongue</td>
                <td>60d</td>
                <td>20.000G</td>
                <td>6d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[24]}
                      onChange={() => handleCheck(24, 69 * 24, 6900, 6 * 24 + 9, 'Dick')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Dick</td>
                <td>69d</td>
                <td>6.900G</td>
                <td>6d 9h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[25]}
                      onChange={() => handleCheck(25, 7 * 24, 20000, 24, 'Hair')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Hair</td>
                <td>7d</td>
                <td>1.000G</td>
                <td>1d</td>
              </tr>
            </tbody>
          </table>

          {/* -------------------Diseases------------------- */}
          <table className="table table-success table-dark table-striped table-bordered table-diseases ">
            <thead>
              <tr className=" table-text-up">
                <th scope="col" colSpan="5">
                  Diseases
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="">
                <th scope="col">✅</th>
                <th scope="col">Injury</th>
                <th scope="col">Time</th>
                <th scope="col">Cost</th>
                <th scope="col">Healing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[26]}
                      onChange={() => handleCheck(26, 3 * 24, 100, 2, 'Simple')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Simple</td>
                <td>3d</td>
                <td>100G</td>
                <td>2h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[27]}
                      onChange={() => handleCheck(27, 14 * 24, 500, 12, 'Moderate')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Moderate</td>
                <td>14d</td>
                <td>500G</td>
                <td>12h</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[28]}
                      onChange={() => handleCheck(28, 60 * 24, 4000, 6 * 24, 'Severe')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Severe</td>
                <td>60d</td>
                <td>4.000G</td>
                <td>6d</td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="control control-checkbox">
                    <input
                      type="checkbox"
                      checked={checked[29]}
                      onChange={() => handleCheck(29, 520 * 24, 100000, 20 * 24, 'Deadly')}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </th>
                <td>Deadly</td>
                <td>520d</td>
                <td>100.000G</td>
                <td>20d</td>
              </tr>
            </tbody>
          </table>
          {/*------------------- button to show -------------------*/}
          <button className="button-shower" onClick={handleShowClick}>
            Summary
          </button>
        </div>
      </div>
      {/* -------------------Summary------------------- */}
      {show === true ? (
        <table className="table table-success table-dark table-striped table-bordered table-summary no-blur ">
          <thead>
            <tr className="table-text-up">
              <th scope="col" colSpan="5">
                Summary
              </th>
            </tr>
          </thead>
          <thead>
            <tr className="">
              <th scope="col">X</th>
              <th scope="col">Injury</th>
              <th scope="col">Time</th>
              <th scope="col">Cost</th>
              <th scope="col">Healing</th>
            </tr>
          </thead>
          <tbody>
            <MedicalBill />
          </tbody>
        </table>
      ) : (
        ''
      )}
    </>
  );
};

export default Heal;
