import Button from "../../../../../components/commons/Button";

const PostBody = () => {
  return (
    <article>
      <div className="mb-4">
        <Button variant="outlined" rounded color="neutral">
          Tecnology
        </Button>
      </div>
      <p className="mb-4">
        8minute read . November 14, 2022 10:21AM GMT5 . Last Updated 8 hours ago
      </p>
      <h1 className="text-2xl font-bold mb-4">
        Exclusive: Russian software disguised as American finds its way into
        U.S. Army, CDC apps
      </h1>
      <p className="mb-4">By James Pearson and Marisa Taylor</p>
      <p className="mb-4">
        LONDON/WASHINGTON, Nov 14 (Reuters) - Thousands of smartphone
        applications in Apple (AAPL.O) and Google's (GOOGL.O) online stores
        contain computer code developed by a technology company, Pushwoosh, that
        presents itself as based in the United States, but is actually Russian,
        Reuters has found.
      </p>
      <p className="mb-4">
        The Centers for Disease Control and Prevention (CDC), the United States'
        main agency for fighting major health threats, said it had been deceived
        into believing Pushwoosh was based in the U.S. capital. After learning
        about its Russian roots from Reuters, it removed Pushwoosh software from
        seven public-facing apps, citing security concerns.
      </p>
      <p className="mb-4">
        The U.S. Army said it had removed an app containing Pushwoosh code in
        March because of the same concerns. That app was used by soldiers at one
        of the country's main combat training bases.
      </p>
      <p className="mb-4">
        According to company documents publicly filed in Russia and reviewed by
        Reuters, Pushwoosh is headquartered in the Siberian town of Novosibirsk,
        where it is registered as a software company that also carries out data
        processing. It employs around 40 people and reported revenue of
        143,270,000 rubles ($2.4 mln) last year. Pushwoosh is registered with
        the Russian government to pay taxes in Russia.
      </p>
      <p className="mb-4">
        On social media and in U.S. regulatory filings, however, it presents
        itself as a U.S. company, based at various times in California, Maryland
        and Washington, D.C., Reuters found.
      </p>
      <p className="mb-4">
        <Button variant="link" color="black">
          Pushwoosh provides code
        </Button>{" "}
        and data processing support for software developers, enabling them to
        profile the online activity of smartphone app users and send tailor-made
        push notifications from Pushwoosh servers.
      </p>
      <h2 className="mb-4">HUGE DATABASE</h2>
      <p className="mb-4">
        Pushwoosh code was installed in the apps of a wide array of
        international companies, influential non-profits and government agencies
        from global consumer goods company Unilever Plc (ULVR.L) and the Union
        of European Football Associations (UEFA) to the politically powerful
        U.S. gun lobby, the National Rifle Association (NRA), and Britain's
        Labour Party.
      </p>
      <p className="mb-4">
        Pushwoosh's business with U.S. government agencies and private companies
        could violate contracting and U.S. Federal Trade Commission (FTC) laws
        or trigger sanctions, 10 legal experts told Reuters. The FBI, U.S.
        Treasury and the FTC declined to comment.
      </p>
      <p className="mb-4">
        Jessica Rich, former director of the FTC's Bureau of Consumer
        Protection, said "this type of case falls right within the authority of
        the FTC," which cracks down on unfair or deceptive practices affecting
        U.S. consumers.
      </p>
      <p className="mb-4">
        Washington could choose to impose sanctions on Pushwoosh and has broad
        authority to do so, sanctions experts said, including possibly through a
        2021 executive order that gives the United States the ability to target
        Russia's technology sector over malicious cyber activity.
      </p>
      <p className="mb-4">
        Pushwoosh code has been embedded into almost 8,000 apps in the Google
        and Apple app stores, according to Appfigures, an app intelligence
        website. Pushwoosh's website says it has more than 2.3 billion devices
        listed in its database.
      </p>
      <p className="mb-4">
        "Pushwoosh collects user data including precise geolocation, on
        sensitive and governmental apps, which could allow for invasive tracking
        at scale," said Jerome Dangu, co-founder of Confiant, a firm that tracks
        misuse of data collected in online advertising supply chains.
      </p>
      <h2 className="mb-4">'SECURITY ISSUES'</h2>
      <p className="mb-4">
        After Reuters raised Pushwoosh's Russian links with the CDC, the health
        agency removed the code from its apps because "the company presents a
        potential security concern," spokesperson Kristen Nordlund said.
      </p>
      <p className="mb-4">
        "CDC believed Pushwoosh was a company based in the Washington, D.C.
        area," Nordlund said in a statement. The belief was based on
        "representations" made by the company, she said, without elaborating.
      </p>
      <p className="mb-4">
        The CDC apps that contained Pushwoosh code included the agency's main
        app and others set up to share information on a wide range of health
        concerns. One was for doctors treating sexually transmitted diseases.
        While the CDC also used the company's notifications for health matters
        such as COVID, the agency said it "did not share user data with
        Pushwoosh."
      </p>
      <p className="mb-4">
        The Army told Reuters it removed an app containing Pushwoosh in March,
        citing "security issues." It did not say how widely the app, which was
        an information portal for use at its National Training Center (NTC) in
        California, had been used by troops.
      </p>
      <p className="mb-4">
        The NTC is a major battle training center in the Mojave Desert for
        pre-deployment soldiers, meaning a data breach there could reveal
        upcoming overseas troop movements.
      </p>
      <h2 className="mb-4">FAKE ADDRESS, FAKE PROFILES</h2>
      <p className="mb-4">
        In U.S. regulatory filings and on social media, Pushwoosh never mentions
        its Russian links. The company lists "Washington, D.C." as its location
        on Twitter and claims its office address as a house in the suburb of
        Kensington, Maryland, according to its latest U.S. corporation filings
        submitted to Delaware's secretary of state. It also lists the Maryland
        address on its Facebook and LinkedIn profiles.
      </p>
      <p className="mb-4">
        The Kensington house is the home of a Russian friend of Konev's who
        spoke to a Reuters journalist on condition of anonymity. He said he had
        nothing to do with Pushwoosh and had only agreed to allow Konev to use
        his address to receive mail.
      </p>
      <p className="mb-4">
        Konev said Pushwoosh had begun using the Maryland address to "receive
        business correspondence" during the coronavirus pandemic.
      </p>
      <p className="mb-4">
        He said he now operates Pushwoosh from Thailand but provided no evidence
        that it is registered there. Reuters could not find a company by that
        name in the Thai company registry.
      </p>
    </article>
  );
};

export default PostBody;
