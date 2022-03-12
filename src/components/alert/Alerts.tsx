import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import AlertMsg from "./elements/AlertMsg";

const Alerts = () => {
  const alerts = useAppSelector((state: RootState) => state.alert);

  return (
    <div className="fixed bottom-3 w-5/6 max-w-[350px] flex flex-col items-center">
      {alerts &&
        alerts.map((alert) => {
          return <AlertMsg key={alert.id} msg={alert.msg} />;
        })}
    </div>
  );
};

export default Alerts;
