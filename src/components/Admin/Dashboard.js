import { useState } from "react";
import BackgroundImage from "assets/wed.jpg";
import ModalBasic from "components/Modal/BasicModal";
import { ReactComponent as CrossIcon } from "assets/Svgs/Cross.svg";
import { ReactComponent as AdminIcons } from "assets/Svgs/Admin.svg";
import { ReactComponent as AppLogo } from "assets/AppLogo.svg";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [{ name: "Group A", value: 200 }];

const COLORS = ["#69A88D", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div
      className=" h-screen flex flex-col justify-between px-10 text-white font-extrabold"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ModalBasic
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        bgClassName="bg-black-opaque"
      >
        <div className="bg-white  w-[74rem] min-h-[54rem] rounded-lg flex flex-col p-10 ">
          <div className="flex ">
            <CrossIcon className="h-8 w-8" />
            <AppLogo className="h-40" />
            <div className="flex w-full justify-between">
              <div className="text-c2xl2 text-black-pitch mt-[7%] ml-[25%]">
                Estadísticas
              </div>
              <AdminIcons />
            </div>
          </div>

          <div className="grid grid-cols-3  gap-4">
            <div className="bg-gray-white border border-gray-grennish h-52 p-2">
              <div className="text-c2xl font-normal flex justify-center">
                Asistencias totales
              </div>
              <div className="h-40 flex items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      startAngle={380}
                      endAngle={80}
                      fill="#69A88D"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-c3xl2 text-green-teal font-semibold">
                  88%
                </div>
              </div>
            </div>
            <div className="bg-gray-white border border-gray-grennish h-56 p-2">
              <div className="text-c2xl font-normal flex justify-center w-full text-center">
                Visulaización de la Invitación
              </div>
              <div className="h-40 flex items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      startAngle={380}
                      endAngle={80}
                      fill="#69A88D"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-c3xl2 text-green-teal font-semibold">
                  88%
                </div>
              </div>
            </div>{" "}
            <div className=" h-52 p-2" />
            <div className="bg-gray-white border border-gray-grennish h-52 p-2">
              <div className="text-c2xl font-normal flex justify-center">
                Confirmados
              </div>
              <div className="h-40 flex items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      startAngle={380}
                      endAngle={120}
                      fill="#69A88D"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-c3xl2 text-green-teal font-semibold">
                  75%
                </div>
              </div>
            </div>
            <div className="bg-gray-white border border-gray-grennish h-52 p-2">
              <div className="text-c2xl font-normal pl-3">
                Cantidad de Invitados
              </div>
              <div className="text-c3xl2 text-green-teal font-semibold flex justify-center mt-10">
                320
              </div>
            </div>{" "}
            <div className="bg-gray-white border border-gray-grennish h-52 p-2">
              <div className="text-c2xl font-normal flex justify-center w-full text-center">
                Lista de canciones sugeridas
              </div>
              <div className="flex flex-col items-center justify-center gap-1 mt-2">
                <div className="text-cmd">Cancion 1</div>
                <div className="text-cmd">Cancion 1</div>
                <div className="text-cmd">Cancion 1</div>
                <div className="text-cmd">Cancion 1</div>
              </div>
            </div>{" "}
            <div className="bg-gray-white border border-gray-grennish h-52 p-2">
              <div className="text-c2xl font-normal flex justify-center">
                Número de adultos
              </div>
              <div className="text-c3xl2 text-green-teal font-semibold flex justify-center mt-10">
                220
              </div>
            </div>
            <div className="bg-gray-white border border-gray-grennish h-52 p-2">
              <div className="text-c2xl font-normal flex justify-center">
                Número de niños
              </div>
              <div className="text-c3xl2 text-green-teal font-semibold flex justify-center mt-10">
                120
              </div>
            </div>{" "}
            <div className="bg-gray-white border border-gray-grennish h-52 p-2">
              <div className="text-c2xl font-normal flex justify-center w-full text-center">
                Invitados que requieren transporte
              </div>
              <div className="text-c3xl2 text-green-teal font-semibold flex justify-center mt-10">
                20
              </div>
            </div>
          </div>
        </div>
      </ModalBasic>
    </div>
  );
};
