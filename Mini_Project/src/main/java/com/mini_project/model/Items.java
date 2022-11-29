package com.mini_project.model;

import com.mini_project.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Items {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Size(min = 4 , max = 55 , message = "name should not be less than 4 character")
    @Pattern(regexp="^[A-Za-z]+$")
    private String name;

    private String description;

    @NotNull
    @DecimalMin(value = "1.00")
    private Double price;

    @URL
    private String image;

    @Enumerated(EnumType.STRING)
    private Category category;

}
