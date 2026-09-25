import { Fragment, type ReactNode } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { WindowBar } from "@/components/ui/WindowBar";
import { profile } from "@/data/profile";

const tokenStyles = {
  keyword: "text-aqua",
  fn: "text-green",
  key: "text-blue",
  string: "text-yellow",
  punct: "text-muted",
  comment: "text-muted italic",
};

type TokenType = keyof typeof tokenStyles;

function Token({ type, children }: { type: TokenType; children: ReactNode }) {
  return <span className={tokenStyles[type]}>{children}</span>;
}

function Value({ value }: { value: string | string[] }) {
  if (typeof value === "string") {
    return <Token type="string">{`"${value}"`}</Token>;
  }

  return (
    <>
      <Token type="punct">[</Token>
      {value.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <Token type="punct">, </Token>}
          <Token type="string">{`"${item}"`}</Token>
        </Fragment>
      ))}
      <Token type="punct">]</Token>
    </>
  );
}

const fields: [key: string, value: string | string[]][] = [
  ["name", profile.name],
  ["role", profile.role],
  ["location", profile.location],
  ["stack", profile.featuredStack],
  ["exploring", profile.exploring],
];

export function CodeCard() {
  return (
    <GlassCard className="min-w-0 animate-float-in motion-reduce:animate-none">
      <WindowBar filename="developer.ts" />
      <pre className="whitespace-pre-wrap wrap-break-word p-5 font-mono text-[0.78rem] leading-7">
        <code>
          <span className="block">
            <Token type="keyword">const</Token>{" "}
            <Token type="fn">developer</Token>{" "}
            <Token type="punct">= {"{"}</Token>
          </span>

          {fields.map(([key, value]) => (
            <span key={key} className="block pl-5">
              <Token type="key">{key}</Token>
              <Token type="punct">: </Token>
              <Value value={value} />
              <Token type="punct">,</Token>
            </span>
          ))}

          <span className="block">
            <Token type="punct">{"};"}</Token>
          </span>
          <span className="block">
            <Token type="comment">{"// scroll to see more ↓"}</Token>
          </span>
        </code>
      </pre>
    </GlassCard>
  );
}
