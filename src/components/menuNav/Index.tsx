import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Btn from "../button/Index";

function MenuNav() {
  return (
    <>
      <div className="flex justify-end pr-[250px] ">
        <div className="text-[#000] flex w-[897px] justify-end gap-[69.9px] h-[67px] items-center">
            <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/sobre">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/sobre-mim">
                Sobre mim
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/servicos">Serviços</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/projetos">Projetos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contato">Contato</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Btn
          className={"bg-[#FD6F00] text-[#FFF] cursor-pointer rounded-[5px]"}
          value={"Download CV"}
        />
        </div>
      </div>
    </>
  );
}
export default MenuNav;
