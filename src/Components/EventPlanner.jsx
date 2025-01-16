import React from 'react';
import './EventPlanner.css'; // Importer le fichier CSS pour le style
import Footer from './Footer';
const EventPlanner = () => {
return (
    <div className="event-planner-container">
        <header>
            <h1>Bienvenue dans Event Planner</h1>
        </header>
        <section className="description">
            <p>
                Planifiez et organisez vos événements sans effort avec Event Planner. Des anniversaires aux réunions d'entreprise, nous avons tout ce qu'il vous faut.
            </p>
            <button className="get-started-button">Commencer</button>
         </section>
         <section className="events_categories">
            <ul>
                <h2>Événements sociaux :</h2>
                <li>Fêtes d'anniversaire</li>
                <li>Célébrations d'anniversaire de mariage</li>
                <li>Réceptions de mariage</li>
                <li>Baby showers</li>
                <li>Fêtes de remise des diplômes</li>
                <li>Réunions de famille</li>
            </ul>
            <ul>
                <h2>Événements de divertissement :</h2>
                <li>Concerts</li>
                <li>Festivals de musique</li>
                <li>Projections de films</li>
                <li>Spectacles de comédie</li>
                <li>Expositions d'art</li>
                <li>Événements culturels</li>
            </ul>
            <ul>
                <h2>Événements communautaires :</h2>
                <li>Événements de collecte de fonds</li>
                <li>Galas de charité</li>
                <li>Actions de bénévolat</li>
                <li>Fêtes de quartier</li>
                <li>Festivals communautaires</li>
                <li>Célébrations culturelles</li>
            </ul>
        </section>
        <section className="features">
            <h2>Fonctionnalités</h2>
            <ul>
                <li>Création et gestion d'événements faciles</li>
                <li>Modèles d'événements personnalisables</li>
                <li>Gestion des listes d'invités</li>
                <li>Collaboration en temps réel</li>
                <li>Rappels et notifications</li>
            </ul>
        </section>
        <section className="testimonials">
            <h2>Témoignages</h2>
            <div className="testimonial">
                <p>"Event Planner a rendu l'organisation de mon mariage un jeu d'enfant. Je le recommande vivement !"</p>
                <p className="author">- Emily Johnson</p>
            </div>
            <div className="testimonial">
                <p>"J'utilise Event Planner pour tous mes événements d'entreprise. Cela me fait gagner tellement de temps et d'efforts !"</p>
                <p className="author">- John Smith</p>
            </div>
        </section>
        <section className="contact">
            <h2>Contactez-nous</h2>
            <form>
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button className="submit-button">Envoyer</button>
            </form>
        </section>
        <Footer/>
    </div>
   );
};

 export default EventPlanner;

