import { useAuth0 } from "@auth0/auth0-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/Popover";
import Icon from "./Icon";

const Profile = () => {
  const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <Popover>
          <PopoverTrigger>
            <div className="flex gap-2 text-sm items-center">
              <span>{user?.name}</span>
              <img
                src={user?.picture}
                alt={user?.name}
                className="rounded-full h-8 w-8"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <button onClick={() => logout()}>
              <Icon icon="logout" className="w-6 h-6" />
              Log Out
            </button>
          </PopoverContent>
        </Popover>
      )}
      {!isAuthenticated && (
        <div>
          <button onClick={() => loginWithRedirect()} title="Log In">
            <Icon icon="login" className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
