import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companion-list";
import CTA from "@/components/cta";
import { recentSessions } from "@/constants";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {recentSessions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            bookmarked={true}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={[
            {
              id: "1",
              subject: "science",
              name: "Neura the Brainy Explorer",
              topic: "Neural Network of the Brain",
              duration: 45,
            },
          ]}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
