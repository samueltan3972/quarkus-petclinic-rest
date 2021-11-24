MIGRATION_ISSUES_DETAILS["b1a21992-1d8b-4f96-b7d2-16e498d14af2"] = [
{description: "<p>Replace the SpringBoot JPA artifact with Quarkus <code>spring-data-jpa<\/code> extension<\/p><p>Spring Data JPA is in spring-data-jpa artifact brought transitively by any <code>org.springframework.data:spring-data-*<\/code> dependency<br/>Add Quarkus dependency <code>io.quarkus:quarkus-spring-data-jpa<\/code><\/p>", ruleID: "springboot-jpa-to-quarkus-00000", issueName: "Replace the SpringBoot Data JPA artifact with Quarkus \'spring-data-jpa\' extension",
problemSummaryID: "b1a21992-1d8b-4f96-b7d2-16e498d14af2", files: [
{l:"<a class='' href='pom_xml.html?project=8192152'>META-INF/maven/org.springframework.samples/spring-petclinic-rest/pom.xml<\/a>", oc:"1"},
{l:"spring-petclinic-rest-2.4.2.jar/BOOT-INF/lib/spring-data-jpa-2.4.3.jar", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/spring-data-jpa", t:"Quarkus JPA Guide"},
]},
];
onProblemSummaryLoaded("b1a21992-1d8b-4f96-b7d2-16e498d14af2");