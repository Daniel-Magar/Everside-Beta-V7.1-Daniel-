import React, { useEffect } from "react";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import endDateValueProvider from "../../../recoil/atoms/EndDateAtomProvider";
import endMonthValueProvider from "../../../recoil/atoms/EndMonthProvider";
import providerComponentAPIData from "../../../recoil/atoms/providerComponentAPIData";
import startDateValueProvider from "../../../recoil/atoms/StartDateAtomProvider";
import startMonthValueProvider from "../../../recoil/atoms/StartMonthAtomProvider";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { exportComponentAsPNG } from "react-component-export-image";

const ProviderInfo2 = () => {
  const [finalStartDate, setFinalStartDate] = useRecoilState(
    startDateValueProvider
  );
  const [finalStartMonth, setFinalStartMonth] = useRecoilState(
    startMonthValueProvider
  );
  const [finalEndDate, setFinalEndDate] = useRecoilState(endDateValueProvider);
  const [finalEndMonth, setFinalEndMonth] = useRecoilState(
    endMonthValueProvider
  );

  const [providerComponentApi, setProviderComponentApi] = useRecoilState(
    providerComponentAPIData
  );

  const MonthList = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const providerInfoComponent = useRef();

  useEffect(() => {
    console.log("final month...:", finalStartMonth);
    console.log("testing final month", MonthList[finalEndMonth]);
  }, [finalStartMonth]);

  return (
    <div ref={providerInfoComponent} className="border rounded-lg">
      <div className=" w-fit ml-auto">
        <button
          onClick={() => exportComponentAsPNG(providerInfoComponent)}
          className=" mx-5"
        >
          <FileDownloadOutlinedIcon
            fontSize="small"
            className="text-gray-400 "
          />
        </button>
      </div>

      {/* Provider's info */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-9 gap-10 xl:gap-5  p-5 ">
        {/* info */}
        <div className=" text-center  ">
          {MonthList[finalStartMonth - 1] + "" + finalStartDate ===
          MonthList[finalEndMonth - 1] + "" + finalEndDate ? (
            <h1 className="text-gray-500 text-sm">
              <span>{MonthList[finalEndMonth - 1]}, </span>
              <span>{finalEndDate}</span>
            </h1>
          ) : (
            <h1 className="text-gray-500 text-sm">
              <span>{MonthList[finalStartMonth - 1]}, </span>
              <span>{finalStartDate}</span>
              <span className="mx-1">-</span>
              <span>{MonthList[finalEndMonth - 1]}, </span>
              <span>{finalEndDate}</span>
            </h1>
          )}

          <h1 className="text-2xl mt-3">
            {providerComponentApi?.provider_info?.name}
          </h1>
        </div>

        {/* provider_score */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">Provider Score</h1>
          <h1 className="text-2xl mt-4">
            <span>{providerComponentApi?.provider_info?.score}</span>
            <span className="text-xs text-gray-500 ">/10</span>
          </h1>
        </div>

        {/*NPS Score */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">Average NPS</h1>
          <h1 className="text-2xl mt-4">
            <span> {providerComponentApi?.provider_info?.avg_nps}</span>
            <span className="text-xs text-gray-500 ">/10</span>
          </h1>
        </div>

        {/* patients */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">Patients</h1>
          <h1 className="text-2xl mt-4">
            <span>{providerComponentApi?.provider_info?.patient_count}</span>
          </h1>
        </div>

        {/* encounter */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">Encounters</h1>
          <h1 className="text-2xl mt-4">
            <span>{providerComponentApi?.provider_info?.encounter}</span>
          </h1>
        </div>

        {/* Surveys */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">NPS Response</h1>
          <h1 className="text-2xl mt-4">
            <span>{providerComponentApi?.provider_info?.nps_response}</span>
          </h1>
        </div>

        {/* NPS Response */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">Surveys</h1>
          <h1 className="text-2xl mt-4">
            <span>{providerComponentApi?.provider_info?.survey}</span>
          </h1>
        </div>

        {/*+ve Topics */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">Top Positive Topic</h1>
          <h1 className="text-lg mt-4">
            <span>{providerComponentApi?.provider_info?.positive_topic}</span>
          </h1>
        </div>

        {/*-ve Topics */}
        <div className="text-center">
          <h1 className="text-gray-500 text-sm">Top Negative Topic</h1>
          <h1 className="text-lg mt-4">
            <span>{providerComponentApi?.provider_info?.negative_topic}.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProviderInfo2;
