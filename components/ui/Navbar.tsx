import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <ul>
        <li>
          <Link href="/">
            <Text color="white" h1>
              P
            </Text>
            <Text color="white" h2>
              okemon
            </Text>
          </Link>
        </li>
      </ul>

      <Spacer css={{ flex: "1" }} />

      <ul>
        <li>
          <Link href="/favorites">
            <Text color="white" h2>
              Favoritos
            </Text>
          </Link>
        </li>
      </ul>
    </div>
  );
};
