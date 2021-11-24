MIGRATION_ISSUES_DETAILS["bc89ff35-587d-4985-a54f-81f392107fef"] = [
{description: "<p>Replace the Spring Web artifact with Quarkus <code>spring-web<\/code> extension<\/p><p>Spring Web is a spring-web artifact brought transitively by any <code>org.springframework:spring-web*<\/code> dependency<br/>Add Quarkus dependency <code>io.quarkus:quarkus-spring-web<\/code><\/p>", ruleID: "springboot-web-to-quarkus-00000", issueName: "Replace the Spring Web artifact with Quarkus \'spring-web\' extension",
problemSummaryID: "bc89ff35-587d-4985-a54f-81f392107fef", files: [
{l:"<a class='' href='pom_xml.html?project=8192152'>META-INF/maven/org.springframework.samples/spring-petclinic-rest/pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/spring-web", t:"Quarkus Spring Web Guide"},
]},
];
onProblemSummaryLoaded("bc89ff35-587d-4985-a54f-81f392107fef");