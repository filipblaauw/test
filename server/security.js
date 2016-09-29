// Any client may insert, update, or remove a post without restriction
Things.permit(['insert', 'update', 'remove']).allowInClientCode();
