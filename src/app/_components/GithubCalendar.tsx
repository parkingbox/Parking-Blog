"use client";
import GitHubCalendar from "react-github-contribution-calendar";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function GitCalendar() {
  const [data, setData] = useState<Record<string, number>>({});
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_CALL}`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      }),
      body: JSON.stringify({
        query: `
        query($userName:String!) {
          user(login: $userName){
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
        `,
        variables: { userName: "parkingbox" },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        let result: { [key: string]: number } = {};
        for (const week of json?.data?.user?.contributionsCollection
          ?.contributionCalendar?.weeks) {
          for (const day of week.contributionDays) {
            result[day.date] = day.contributionCount;
          }
        }
        setData(result);
      })
      .catch((err) => console.error("github error", err));
  }, []);
  return (
    <main className="bg-black">
      <div>
        <GitHubCalendar
          values={data}
          until={dayjs().format("YYYY-MM-DD")}
          weekLabelAttributes={{}}
          monthLabelAttributes={{}}
          panelAttributes={{}}
          panelColors={["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]}
        />
      </div>
    </main>
  );
}
export default GitCalendar;
