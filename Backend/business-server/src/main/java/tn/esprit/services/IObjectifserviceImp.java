package tn.esprit.services;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.entities.Objectif;
import tn.esprit.entities.Entreprise;
import tn.esprit.repositories.ObjectifRepository;
import tn.esprit.repositories.EntrepriseRepository;

import javax.persistence.EntityNotFoundException;
import com.itextpdf.text.Document;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
@Slf4j
public class IObjectifserviceImp implements IObjectifservice {

    @Autowired
    private ObjectifRepository boRepository;
    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @Override
    public Objectif addObjectif(Objectif bo, int idEntrep) {
        Entreprise entreprise = entrepriseRepository.findById(idEntrep)
                .orElseThrow(() -> new EntityNotFoundException("Entreprise not found with id: " + idEntrep));
        bo.setEntreprise(entreprise);

        Date date_debut = new Date();
        Date date_fin = new Date();
        bo.setDate_debut_objectif(date_debut);
        bo.setDate_fin_objectif(date_fin);
        return boRepository.save(bo);
    }

    @Override
    public List<Objectif> ListObjectifs(){
        return boRepository.findAll();
    }

    @Override
    public void deleteObjectifs(Long idBO) {
        Objectif r = boRepository.findById(idBO).orElse(null);

        boRepository.delete(r);
    }

    @Override
    public void updateObjectif(Objectif obj, Long idBesoinOffre) {

        Objectif existingObjectif = boRepository.findById(idBesoinOffre)
                .orElseThrow(() -> new EntityNotFoundException("Objectif not found with id: " + idBesoinOffre));

        existingObjectif.setDate_fin_objectif(obj.getDate_fin_objectif());
        existingObjectif.setDate_debut_objectif(obj.getDate_debut_objectif());
        existingObjectif.setDescr_objectif(obj.getDescr_objectif());
        existingObjectif.setName_objectif(obj.getName_objectif());
        existingObjectif.setStatus_objectif(obj.getStatus_objectif());
        existingObjectif.setType_objectif(obj.getType_objectif());


        boRepository.save(existingObjectif);
    }

    @Override
    public Objectif getObjectifById(Long idBO) {

        return boRepository.getById(idBO);
    }


    public ByteArrayInputStream objectifsPDFReport(List<Objectif> objectifs) {

        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();

            com.itextpdf.text.Font font= FontFactory.getFont(FontFactory.TIMES_BOLDITALIC, 25, BaseColor.BLUE);
            Paragraph para = new Paragraph("Objectifs Summary - Campus Connect", font);
            para.setAlignment(Element.ALIGN_CENTER);
            document.add(para);
            document.add(Chunk.NEWLINE);

            PdfPTable table = new PdfPTable(6);

            // column titles
            Stream.of("ID", "Name", "Description", "Start Date", "End Date", "Status")
                    .forEach(headerTitle -> {
                        PdfPCell x = new PdfPCell();
                        com.itextpdf.text.Font headfont= FontFactory.getFont(FontFactory.HELVETICA_BOLD);
                        x.setBackgroundColor(BaseColor.LIGHT_GRAY);
                        x.setHorizontalAlignment(Element.ALIGN_CENTER);
                        x.setBorderWidth(1);
                        x.setPhrase(new Phrase(headerTitle, headfont));
                        table.addCell(x);
                    });

            for (Objectif objectif : objectifs) {
                PdfPCell idCell = new PdfPCell(new Phrase(String.valueOf(objectif.getId_objectif())));
                idCell.setPaddingLeft(1);
                idCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                idCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(idCell);

                PdfPCell nameCell = new PdfPCell(new Phrase(objectif.getName_objectif()));
                nameCell.setPaddingLeft(1);
                nameCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                nameCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(nameCell);

                PdfPCell descriptionCell = new PdfPCell(new Phrase(objectif.getDescr_objectif()));
                descriptionCell.setPaddingLeft(1);
                descriptionCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                descriptionCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(descriptionCell);

                PdfPCell startDateCell = new PdfPCell(new Phrase(String.valueOf(objectif.getDate_debut_objectif())));
                startDateCell.setPaddingLeft(1);
                startDateCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                startDateCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(startDateCell);

                PdfPCell endDateCell = new PdfPCell(new Phrase(String.valueOf(objectif.getDate_fin_objectif())));
                endDateCell.setPaddingLeft(1);
                endDateCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                endDateCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(endDateCell);

                PdfPCell statusCell = new PdfPCell(new Phrase(objectif.getStatus_objectif().toString()));
                statusCell.setPaddingLeft(1);
                statusCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                statusCell.setHorizontalAlignment(Element.ALIGN_LEFT);
                table.addCell(statusCell);
            }
            document.add(table);
            document.close();
        } catch (DocumentException e) {
            throw new RuntimeException(e);
        }
        return new ByteArrayInputStream(out.toByteArray());
    }



}
