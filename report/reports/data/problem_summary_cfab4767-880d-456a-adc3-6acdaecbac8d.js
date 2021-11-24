MIGRATION_ISSUES_DETAILS["cfab4767-880d-456a-adc3-6acdaecbac8d"] = [
{description: "<p>Replace the SpringBoot Security artifact with Quarkus <code>spring-security<\/code> extension<\/p><p>Spring Security is in spring-security-core artifact brought transitively by <code>org.springframework.boot:spring-boot-starter-security<\/code> dependency.<br/>Add Quarkus dependency <code>io.quarkus:quarkus-spring-security<\/code><\/p>", ruleID: "springboot-security-to-quarkus-00000", issueName: "Replace the SpringBoot Security artifact with Quarkus \'spring-security\' extension",
problemSummaryID: "cfab4767-880d-456a-adc3-6acdaecbac8d", files: [
{l:"<a class='' href='pom_xml.html?project=8192152'>META-INF/maven/org.springframework.samples/spring-petclinic-rest/pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/spring-security", t:"Quarkus Extension for Spring Security API Guide"},
]},
];
onProblemSummaryLoaded("cfab4767-880d-456a-adc3-6acdaecbac8d");