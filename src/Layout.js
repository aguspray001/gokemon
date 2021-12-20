import UserInfo from "components/molecules/UserInfo";
import React, { useEffect, useState } from "react";
import { changeUserNameAction } from "store/action";
import { useAppContext } from "store/store";
import { showNotif } from "utils/showNotif";

function Layout({ children }) {
  const [username, setUsername] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const { state, dispatch } = useAppContext();

  const handleChangeName = ({ target }) => {
    setUsername(target.value);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSubmitName = () => {
    setIsEdit(false);
    if (username !== "") {
      changeUserNameAction(dispatch, username);
    } else {
      showNotif("Fill your name first..", "error");
    }
  };

  useEffect(() => {
    setUsername(state?.username);
  }, []);

  return (
    <div>
      <UserInfo
        owned={state?.collectedPokemon?.length}
        placeholder="your name..."
        title="name"
        onChange={(e) => handleChangeName(e)}
        onConfirm={handleEdit}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmitName();
          }
        }}
        onBlur={handleSubmitName}
        value={username || "Trainer"}
        isEdit={isEdit}
      />
      {children}
    </div>
  );
}

export default Layout;
