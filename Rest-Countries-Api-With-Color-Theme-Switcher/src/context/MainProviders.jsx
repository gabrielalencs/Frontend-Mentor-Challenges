// Context

import { CategoryInformationProvider } from "./CategoryInformationContext";
import { FavoriteListProvider } from "./FavoriteListContext";

const MainProviders = ({ children }) => {
    return (
        <CategoryInformationProvider>
            <FavoriteListProvider>
                {children}
            </FavoriteListProvider>
        </CategoryInformationProvider>
    );
};

export default MainProviders;