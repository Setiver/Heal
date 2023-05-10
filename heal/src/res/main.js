import { useState, useEffect } from 'react';
import tablica from './tablica.png';

const Heal = () => {
  const [checked, setChecked] = useState(Array(30).fill(false));

  const [timeHeal, setTimeHeal] = useState(Array(30).fill(0));
  const [moneyRepair, setMoneyRepair] = useState(Array(30).fill(0));
  const [timeRepair, setTimeRepair] = useState(Array(30).fill(0));

  const [fullTimeHeal, setFullTimeHeal] = useState(0);
  const [fullCost, setFullCost] = useState(0);
  const [fullTimeCost, setFullTimeCost] = useState(0);

  function handleCheck(index, hours, money, repair) {
    const newTimeHeal = [...timeHeal];
    const newMoneyRepair = [...moneyRepair];
    const newTimeRepair = [...timeRepair];
    const newChecked = [...checked];

    newChecked[index] = !checked[index];
    setChecked(newChecked);

    if (!checked[index]) {
      newTimeHeal[index] = hours;
      newMoneyRepair[index] = money;
      newTimeRepair[index] = repair;

      setTimeHeal(newTimeHeal);
      setMoneyRepair(newMoneyRepair);
      setTimeRepair(newTimeRepair);
    } else {
      newTimeHeal[index] = 0;
      newMoneyRepair[index] = 0;
      newTimeRepair[index] = 0;

      setTimeHeal(newTimeHeal);
      setMoneyRepair(newMoneyRepair);
      setTimeRepair(newTimeRepair);
    }
  }

  useEffect(() => {
    const filteredtimeHeal = timeHeal.filter(value => value !== 0);
    const filteredCost = moneyRepair.filter(value => value !== 0);
    const filteredTimeRepair = timeRepair.filter(value => value !== 0);
    setFullTimeHeal(filteredtimeHeal.reduce((acc, cur) => acc + cur, 0));
    setFullCost(filteredCost.reduce((acc, cur) => acc + cur, 0));
    setFullTimeCost(filteredTimeRepair.reduce((acc, cur) => acc + cur, 0));
  }, [timeHeal, moneyRepair, timeRepair]);

  return (
    <>
      <div>
        <img src={tablica} alt="Tablica" />

        <div className="control-group">
          {/* -------------------Wounds------------------- */}
          <div className="wounds">
            <h1>Wounds</h1>
            <label className="control control-checkbox">
              Scratch - 6h - 10G - 30m
              <input
                type="checkbox"
                checked={checked[0]}
                onChange={() => handleCheck(0, 6, 10, 0.5)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Few Cuts - 12h - 30G - 1h
              <input
                type="checkbox"
                checked={checked[1]}
                onChange={() => handleCheck(1, 12, 30, 1)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Dozen Cuts - 24h - 70G - 2h
              <input
                type="checkbox"
                checked={checked[2]}
                onChange={() => handleCheck(2, 24, 70, 2)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Tens Cuts - 2d - 100G - 6h
              <input
                type="checkbox"
                checked={checked[3]}
                onChange={() => handleCheck(3, 2 * 24, 100, 6)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Severed skin - 2d - 300G - 3h
              <input
                type="checkbox"
                checked={checked[30]}
                onChange={() => handleCheck(30, 2 * 24, 300, 3)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Torn tendons - 4d - 1.000G - 12h
              <input
                type="checkbox"
                checked={checked[4]}
                onChange={() => handleCheck(4, 4 * 24, 1000, 12)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
          {/* -------------------------------------- */}

          {/* -------------------Burns------------------- */}
          <div className="burns">
            <h1>Burns</h1>

            <label className="control control-checkbox">
              1st degree - 1d - 50G - 2h
              <input
                type="checkbox"
                checked={checked[5]}
                onChange={() => handleCheck(5, 24, 50, 2)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              2nd degree - 3d - 100G - 5h
              <input
                type="checkbox"
                checked={checked[6]}
                onChange={() => handleCheck(6, 3 * 24, 100, 5)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              3rd degree - 10d - 200G - 1d
              <input
                type="checkbox"
                checked={checked[7]}
                onChange={() => handleCheck(7, 10 * 24, 200, 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              4th degree - 25d - 1.500G - 4d
              <input
                type="checkbox"
                checked={checked[8]}
                onChange={() => handleCheck(8, 25 * 24, 1500, 4 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>

          {/* -------------------Breaks------------------- */}
          <div className="breaks">
            <h1>Breaks</h1>

            <label className="control control-checkbox">
              Finger - 4d - 400G - 1d
              <input
                type="checkbox"
                checked={checked[9]}
                onChange={() => handleCheck(9, 4 * 24, 400, 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Arm - 7d - 2.000G - 2d
              <input
                type="checkbox"
                checked={checked[10]}
                onChange={() => handleCheck(10, 7 * 24, 2000, 2 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Leg - 8d - 2.500G - 2.5d
              <input
                type="checkbox"
                checked={checked[11]}
                onChange={() => handleCheck(11, 8 * 24, 2500, 2.5 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Ribs - 10d - 3.000G - 2d
              <input
                type="checkbox"
                checked={checked[12]}
                onChange={() => handleCheck(12, 10 * 24, 3000, 2 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Skull - 40d - 5.000G - 5d
              <input
                type="checkbox"
                checked={checked[13]}
                onChange={() => handleCheck(13, 40 * 24, 5000, 5 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Spine - 80d - 20.000G - 10d
              <input
                type="checkbox"
                checked={checked[14]}
                onChange={() => handleCheck(14, 80 * 24, 20000, 10 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>

          {/* -------------------Loss------------------- */}
          <div className="loss">
            <h1>Loss of</h1>

            <label className="control control-checkbox">
              Finger - 14d - 1.000G - 2d
              <input
                type="checkbox"
                checked={checked[15]}
                onChange={() => handleCheck(15, 14 * 24, 1000, 2 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Hand - 40d - 5.000G - 3d
              <input
                type="checkbox"
                checked={checked[16]}
                onChange={() => handleCheck(16, 7 * 24, 5000, 1.5 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Arm - 100d - 20.000G - 10d
              <input
                type="checkbox"
                checked={checked[17]}
                onChange={() => handleCheck(17, 100 * 24, 20000, 10 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Foot - 40d - 6.000G - 4d
              <input
                type="checkbox"
                checked={checked[18]}
                onChange={() => handleCheck(18, 40 * 24, 6000, 4 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Leg - 110d - 21.000G - 12d
              <input
                type="checkbox"
                checked={checked[19]}
                onChange={() => handleCheck(19, 110 * 24, 21000, 12 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Eye - 520d - 80.000G - 40d
              <input
                type="checkbox"
                checked={checked[20]}
                onChange={() => handleCheck(20, 520 * 24, 80000, 40 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Nose - 80d - 30.000G - 10d
              <input
                type="checkbox"
                checked={checked[21]}
                onChange={() => handleCheck(21, 100 * 24, 30000, 10 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Ear - 50d - 20.000G - 6d
              <input
                type="checkbox"
                checked={checked[22]}
                onChange={() => handleCheck(22, 50 * 24, 20000, 6 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Tongue - 60d - 20.000G - 6d
              <input
                type="checkbox"
                checked={checked[23]}
                onChange={() => handleCheck(23, 60 * 24, 20000, 6 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Dick - 69d - 6.900G - 6d 9h
              <input
                type="checkbox"
                checked={checked[24]}
                onChange={() => handleCheck(24, 69 * 24, 6900, 6 * 24 + 9)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Hair - 7d - 1.000G - 1d
              <input
                type="checkbox"
                checked={checked[25]}
                onChange={() => handleCheck(25, 7 * 24, 20000, 24)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
          {/* -------------------diseases------------------- */}
          <div className="diseases">
            <h1>Diseases</h1>

            <label className="control control-checkbox">
              Simple - 3d - 100G - 2h
              <input
                type="checkbox"
                checked={checked[26]}
                onChange={() => handleCheck(26, 3 * 24, 100, 2)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Moderate - 14d - 500G - 12h
              <input
                type="checkbox"
                checked={checked[27]}
                onChange={() => handleCheck(27, 14 * 24, 500, 12)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Severe - 60d - 4.000G - 6d
              <input
                type="checkbox"
                checked={checked[28]}
                onChange={() => handleCheck(28, 60 * 24, 4.0, 6 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
              Deadly - 520d - 100.000G - 20d
              <input
                type="checkbox"
                checked={checked[29]}
                onChange={() => handleCheck(29, 520 * 25, 100000, 20 * 24)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
          {/* -------------------------------------- */}
        </div>
        {/* -------------------Hours------------------- */}
        <div>
          <p>Hours: {fullTimeHeal} </p>
          <p>Days: {Math.round((fullTimeHeal / 24) * 10) / 10} </p>
          <p>Cost: {fullCost} </p>
          <p>Payed Time Hours: {fullTimeCost}</p>
          <p>Payed Time Days: {Math.round((fullTimeCost / 24) * 10) / 10}</p>
        </div>
      </div>
    </>
  );
};

export default Heal;
