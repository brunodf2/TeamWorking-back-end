"use strict";

const Mail = use("Mail");

class InvitationEmail {
  static get concurrency() {
    return 1;
  }

  static get key() {
    return "InvitationEmail-job";
  }

  // This is where the work is done.
  async handle({ user, team, email }) {
    await Mail.send(
      ["emails.invitation"],
      { team: team.name, user: user.name },
      message
        .to(email)
        .from("brunoaraujo@teamworking.com", "Bruno | TeamWorking")
        .subject(`Convite para o time ${team.name}`)
    );
  }
}

module.exports = InvitationEmail;
