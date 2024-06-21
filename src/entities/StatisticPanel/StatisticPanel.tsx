export const StatisticPanel = () => {
    const days = [
        {
            day: 'Mon',
            income: 3000,
            expence: 1200,
        },
        {
            day: 'Tue',
            income: 100,
            expence: 800,
        },
        {
            day: 'Wed',
            income: 0,
            expence: 1520,
        },
        {
            day: 'Thu',
            income: 5000,
            expence: 220,
        },
        {
            day: 'Fri',
            income: 5000,
            expence: 903,
        },
        {
            day: 'Sat',
            income: 4350,
            expence: 2342,
        },
        {
            day: 'Sun',
            income: 3000,
            expence: 3290,
        },
    ];

    const maxValue = Math.max(
        Math.max(...days.map((day) => day.expence)),
        Math.max(...days.map((day) => day.income)),
    );

    const getPercent = (value: number): string => {
        return `${Math.round((value / maxValue) * 100)}%`;
    };

    return (
        <div className=" bg-neutral-800 flex flex-col gap-1 rounded-3xl py-3 px-6">
            <div className="w-full flex justify-between">
                <div>
                    <div className="flex gap-2 items-center">
                        <span className="block rounded-full bg-blue-theme w-[6px] h-[6px]"></span>
                        <p className="font-semibold text-xl">₽42,651</p>
                    </div>
                    <p className="text-[12px] font-normal text-gray-300">
                        Monthly Income
                    </p>
                </div>
                <div>
                    <div className="flex gap-2 items-center">
                        <span className="block rounded-full bg-gray-600 w-[6px] h-[6px]"></span>
                        <p className="font-semibold text-xl">₽42,651</p>
                    </div>
                    <p className="text-[12px] font-normal text-gray-300">
                        Monthly Expence
                    </p>
                </div>
            </div>
            <div className="h-[100px] justify-between flex">
                {days.map((day) => {
                    const expPercent = getPercent(day.expence);
                    const incPercent = getPercent(day.income);

                    return (
                        <div key={day.day} className="flex w-[28px] flex-col justify-end h-full">
                            <div className="flex gap-1 h-full">
                                <div
                                    className={`bg-blue-theme self-end rounded-sm w-full min-h-1`}
                                    style={{height: incPercent}}
                                ></div>
                                <div
                                    className={`bg-gray-600 self-end rounded-sm w-full min-h-1`}
                                    style={{height: expPercent}}
                                ></div>
                            </div>
                            <p className="text-center text-[12px] font-normal text-gray-300">
                                {day.day}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
